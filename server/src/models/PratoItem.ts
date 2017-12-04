import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, JoinColumn} from "typeorm";
import {Prato} from './Prato'
import {Item} from './Item'


@Entity()
@Index("IdPrato",["IdPrato",])
@Index("IdItem",["IdItem",])
export class PratoItem {


    @Column("int",{ 
        generated:true,
        nullable:false,
        primary:true, 
        })
    Id:number;
        

   
    @ManyToOne(type=>Prato, IdPrato=>IdPrato.pratoitems)
    @JoinColumn()
    IdPrato:Prato;
    

   
    @ManyToOne(type=>Item, IdItem=>IdItem.pratoitems)
    @JoinColumn()
    IdItem:Item;
    
}