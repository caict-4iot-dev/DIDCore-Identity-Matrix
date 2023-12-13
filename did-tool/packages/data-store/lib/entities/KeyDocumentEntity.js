const { Entity, Column, PrimaryGeneratedColumn } = require('typeorm');

@Entity({ name: 'key_document' })
class KeyDocumentEntity {
  @PrimaryGeneratedColumn()
  id;

  @Column({ type: 'json', nullable: false })
  keyStore;

  @Column({ type: 'text', nullable: false })
  kid;

}

export { KeyDocumentEntity };