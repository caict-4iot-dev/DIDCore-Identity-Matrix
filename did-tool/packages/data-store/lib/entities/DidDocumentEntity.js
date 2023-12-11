const { Entity, Column, PrimaryGeneratedColumn } = require('typeorm');

@Entity({ name: 'did_document' })
class DidDocumentEntity {
  @PrimaryGeneratedColumn()
  id;

  @Column({ type: 'json', nullable: true })
  context;

  @Column({ type: 'text', nullable: true })
  did;

  @Column({ type: 'json', nullable: true })
  verificationMethod;

  @Column({ type: 'json', nullable: true })
  authentication;

  @Column({ type: 'json', nullable: true })
  extension;

  @Column({ type: 'json', nullable: true })
  service;

  @Column({ type: 'text', nullable: true })
  created;

  @Column({ type: 'text', nullable: true })
  updated;

  @Column({ type: 'json', nullable: true })
  proof;
}

// module.exports = { DidDocumentEntity };

export { DidDocumentEntity };
