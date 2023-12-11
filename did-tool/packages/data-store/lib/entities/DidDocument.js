
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
          context: this['@context'],
          did: this.id,
          verificationMethod: this.verificationMethod,
          authentication: this.authentication,
          extension: JSON.stringify(this.extension),
          service: this.service,
          created: this.created,
          updated: this.updated,
          proof: this.proof ,
        };
    }

    static fromEntity(entity) {
        const didDocument = new DidDocument({
            '@context': entity.context,
            id: entity.did,
            verificationMethod: entity.verificationMethod,
            authentication: entity.authentication,
            extension: JSON.parse(entity.extension),
            service: entity.service,
            created: entity.created,
            updated: entity.updated,
            proof: entity.proof ,
        });
        return didDocument;
    }
  }

  export { DidDocument };
  