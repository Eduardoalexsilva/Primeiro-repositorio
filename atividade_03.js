//Mateus me ajudou nessa//
class Sacar{
    constructor(valor){
        this.valor = valor
    }

    saque(){
        let total = this.valor
        let cedula = 100
        let qtdCedulas = 0

        while(true){
            if(total >= cedula){
                total -= cedula
                qtdCedulas ++
            }else{
                if(qtdCedulas > 0){
                    console.log(`foram uasdas o total de ${qtdCedulas} de notas de ${cedula}`)
                }

                if(cedula === 100){
                    cedula = 50;
                }else if(cedula === 50){
                    cedula = 20
                }else if(cedula === 20){
                    cedula = 10;
                }else if(cedula === 10){
                     cedula = 5;
                }else if(cedula === 5){
                    cedula = 2;
                }

                qtdCedulas = 0 

                if(total === 0){
                    break;
                }
            }
           

        }
    }

} 

const retira = new Sacar(280)

retira.saque()