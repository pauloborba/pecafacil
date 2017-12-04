import {Index,Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, JoinColumn} from "typeorm";
import {Cliente} from './Cliente'
import {Fornecedor} from './Fornecedor'


@Entity()
@Index("Login",["Login",],{unique:true})
export class Usuario {


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
    Login:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:50, 
        })
    Senha:string;
        

    @Column("varchar",{ 
        nullable:false,
        length:50, 
        })
    Nome:string;
        

    @Column("varchar",{ 
        nullable:true,
        length:50, 
        })
    Telefone:string;
    
   
    @OneToMany(type=>Cliente, clientes=>clientes.Usuario)
    clientes:Cliente[];
    

   
    @OneToMany(type=>Fornecedor, fornecedors=>fornecedors.Usuario)
    fornecedors:Fornecedor[];
    
}