export default function(props) {
    if(props.test){
        //Caso a expressão em test seja verdadeira, retorna os elementos filhos da tag
        return props.children;
    }else{
        return false;
    }
}