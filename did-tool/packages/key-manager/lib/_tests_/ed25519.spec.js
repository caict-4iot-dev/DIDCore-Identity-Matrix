import chai from 'chai';
import {Ed25519VerificationKey2020} from '../innerIndex.js';
import * as base58btc from 'base58-universal';
const should = chai.should();
const {expect} = chai;
import { seed} from './mock-data.js';

    describe('generate', () => {
        it('should generate a key pair', async () => {
            let ldKeyPair;
            let error;
            try {
                ldKeyPair = await Ed25519VerificationKey2020.generate();
            } catch(e) {
                error = e;
            }
            console.log('edKeyPair:', ldKeyPair);
            should.not.exist(error);
            should.exist(ldKeyPair.privateKeyMultibase);
            should.exist(ldKeyPair.publicKeyMultibase);
            console.log('ldKeyPair.privateKeyMultibase.slice(1):', ldKeyPair.privateKeyMultibase.slice(1));
            const privateKeyBytes = base58btc
                .decode(ldKeyPair.privateKeyMultibase.slice(1));
            const publicKeyBytes = base58btc
                .decode(ldKeyPair.publicKeyMultibase.slice(1));
            privateKeyBytes.length.should.equal(66);
            publicKeyBytes.length.should.equal(34);
        });
        it('should generate the same key from the same seed', async () => {
            const seed = new Uint8Array(32);
            seed.fill(0x01);
            const keyPair1 = await Ed25519VerificationKey2020.generate({seed});
            const keyPair2 = await Ed25519VerificationKey2020.generate({seed});
            console.log('edKeyPair1:', keyPair1);
            console.log('edKeyPair2:', keyPair2.publicKeyMultibase);
            // expect(keyPair1.publicKeyMultibase).to.equal(keyPair2.publicKeyMultibase);
            // expect(keyPair1.privateKeyMultibase).to
            //     .equal(keyPair2.privateKeyMultibase);
        });
});

describe('export', () => {
    it('should export id, type and key material', async () => {
        // Encoding returns a 64 byte uint8array, seed needs to be 32 bytes
        const seedBytes = (new TextEncoder()).encode(seed).slice(0, 32);
        const keyPair = await Ed25519VerificationKey2020.generate({
            seed: seedBytes, controller: 'did:example:1234'
        });
        console.log('keyPair:', keyPair);
        const pastDate = new Date(2020, 11, 17).toISOString()
            .replace(/\.[0-9]{3}/, '');
        keyPair.revoked = pastDate;
        const exported = await keyPair.export({
            publicKey: true, privateKey: true
        });
        console.log('exported:', exported);
        expect(exported).to.have.keys([
            'id', 'type', 'controller', 'publicKeyMultibase', 'privateKeyMultibase',
            'revoked'
        ]);

        expect(exported.controller).to.equal('did:example:1234');
        expect(exported.type).to.equal('Ed25519VerificationKey2020');
        expect(exported.id).to.equal('did:example:1234#' +
            'z6Mkpw72M9suPCBv48X2Xj4YKZJH9W7wzEK1aS6JioKSo89C');
        expect(exported).to.have.property('publicKeyMultibase',
            'z6Mkpw72M9suPCBv48X2Xj4YKZJH9W7wzEK1aS6JioKSo89C');
        expect(exported).to.have.property('privateKeyMultibase',
            'zrv1mHUXWkWUpThaapTt8tkxSotE1iSRRuPNarhs3vTn2z61hQESuKXG7zGQsePB7JHd' +
            'jaCzPZmBkkqULLvoLHoD82a');
        expect(exported).to.have.property('revoked', pastDate);
    });

});
describe('sign verify', () => {
    const seedBytes = (new TextEncoder()).encode(seed).slice(0, 32);
    it('2020 sign verify', async () => {

        const keyPair2020 = await Ed25519VerificationKey2020.generate({
            seed: seedBytes, controller: 'did:example:1234'
        });

        const data = (new TextEncoder()).encode('test data goes here');
        const data2 = (new TextEncoder()).encode('test data goes here2');
        const signatureBytes2020 = await keyPair2020.signer().sign({data});
        console.log('exported:', signatureBytes2020);

        expect(
            await keyPair2020.verifier()
                .verify({data, signature: signatureBytes2020})
        ).to.be.true;
    });
});
