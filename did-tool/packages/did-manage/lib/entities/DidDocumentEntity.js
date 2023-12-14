const { Entity, Column, PrimaryGeneratedColumn } = require('typeorm');

@Entity({ name: 'did_document' })
class DidDocumentEntity {
  @PrimaryGeneratedColumn()
  id;

  @Column({ type: 'text', nullable: true })
  context;

  @Column({ type: 'text', nullable: true })
  did;

  @Column({ type: 'text', nullable: true })
  verificationMethod;

  @Column({ type: 'text', nullable: true })
  authentication;

  @Column({ type: 'text', nullable: true })
  extension;

  @Column({ type: 'text', nullable: true })
  service;

  @Column({ type: 'text', nullable: true })
  created;

  @Column({ type: 'text', nullable: true })
  updated;

  @Column({ type: 'text', nullable: true })
  proof;
}

module.exports = { DidDocumentEntity };

// export { DidDocumentEntity };
