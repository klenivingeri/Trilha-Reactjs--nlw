interface ButtonProps{
    color: string;
    nome:string
}


export function Button(props: ButtonProps){

    return(
     
        <button type="button" style={{backgroundColor: props.color}}>
            Botão { props.nome}
        </button>
    );
}