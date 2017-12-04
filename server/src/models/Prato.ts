import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, JoinColumn} from "typeorm";
import {Pedido} from './Pedido'
import {PratoItem} from './PratoItem'


@Entity()
export class Prato {


    @Column("int",{ 
        generated:true,
        nullable:false,
        primary:true, 
        })
    Id:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:50, 
        })
    Nome:string;
        

    @Column("decimal",{ 
        nullable:false,
        precision:15,
        scale:2, 
        })
    Valor:number;
        

    @Column("varchar",{ 
        nullable:true,
        length:200, 
        })
    Descricao:string;
        

    @Column("text",{ 
        nullable:true, 
        })
    Tamanho:string;
        

   
    @OneToMany(type=>Pedido, pedidos=>pedidos.IdPrato)
    pedidos:Pedido[];
    

   
    @OneToMany(type=>PratoItem, pratoitems=>pratoitems.IdPrato)
    pratoitems:PratoItem[];
    
}