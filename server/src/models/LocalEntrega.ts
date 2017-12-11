import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, JoinColumn} from "typeorm";
import {Pedido} from './Pedido'


@Entity()
export class LocalEntrega {


    @Column("int",{ 
        generated:true,
        nullable:false,
        primary:true, 
        })
    Id:number;
        

    @Column("double",{ 
        nullable:true, 
        })
    Latitude:number;
        

    @Column("double",{ 
        nullable:true, 
        })
    Longitude:number;
        

    @Column("int",{ 
        nullable:false, 
        })
    Cep:number;
        

    @Column("varchar",{ 
        nullable:false,
        length:50, 
        })
    Endereco:string;
        

    @Column("varchar",{ 
        nullable:true,
        length:100, 
        })
    Complemento:string;
        

    @Column("varchar",{ 
        nullable:true,
        length:100, 
        })
    Referencia:string;
        

   
    @OneToMany(type=>Pedido, pedidos=>pedidos.IdLocalEntrega)
    pedidos:Pedido[];
    
}