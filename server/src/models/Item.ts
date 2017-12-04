import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, JoinColumn} from "typeorm";
import {Fornecedor} from './Fornecedor'
import {PratoItem} from './PratoItem'


@Entity()
@Index("IdFornecedor",["IdFornecedor",])
export class Item {


    @Column("int",{ 
        generated:true,
        nullable:false,
        primary:true, 
        })
    Id:number;
        

   
    @ManyToOne(type=>Fornecedor, IdFornecedor=>IdFornecedor.items)
    @JoinColumn()
    IdFornecedor:Fornecedor;
    

    @Column("varchar",{ 
        nullable:false,
        length:50, 
        })
    Nome:string;
        

    @Column("varchar",{ 
        nullable:true,
        length:200, 
        })
    Descricao:string;
        

   
    @OneToMany(type=>PratoItem, pratoitems=>pratoitems.IdItem)
    pratoitems:PratoItem[];
    
}