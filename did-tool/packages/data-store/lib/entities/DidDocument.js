
  class DidDocument {
    constructor(data) {
        this['@context'] = data['@context'] || [];
        this.id = data['id'] || '';
        this.verificationMethod = data['verificationMethod'] || [];
        this.authentication = data['authentication'] || [];
        this.extension = data['extension'] || {};
        this.service = data['service'] || [];
        this.created = data['created'] || '';
        this.updated = data['updated'] || '';
        this.proof = data['proof'] || {};
      }

    toEntity() {
        return {
          context: JSON.stringify(this['@context']),
          did: this.id,
          verificationMethod: JSON.stringify(this.verificationMethod),
          authentication: JSON.stringify(this.authentication),
          extension: JSON.stringify(this.extension),
          service: JSON.stringify(this.service),
          created: this.created,
          updated: this.updated,
          proof: JSON.stringify(this.proof) ,
        };
    }

    static fromEntity(entity) {
        const didDocument = new DidDocument({
            '@context': JSON.parse(entity.context),
            id: entity.did,
            verificationMethod: JSON.parse(entity.verificationMethod),
            authentication: entity.authentication,
            extension: JSON.parse(entity.extension),
            service: JSON.parse(entity.service),
            created: entity.created,
            updated: entity.updated,
            proof: JSON.parse(entity.proof) ,
        });
        return didDocument;
    }
  }

  // export { DidDocument };
  module.exports = { DidDocument };
  