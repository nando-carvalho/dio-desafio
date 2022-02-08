class ValidaCPF {
    constructor(cpfEnviado){        
        Object.defineProperty(this, 'cpfLimpo', {
            enumerable: true,
            writable: false,            
            value: cpfEnviado.replace(/\D+/g, '')            
        });
    }

    

    valida() {
        if (typeof this.cpfLimpo === 'undefined') return false;
        if (this.cpfLimpo.length !== 11)  return false;
        if (this.isSequencia()) return false;
        const cpfParcial = this.cpfLimpo.slice(0, -2); //removendo os ultimos 2 caracteres do cpf
        const digito1 = this.criaDigito(cpfParcial);
        const digito2 = this.criaDigito(cpfParcial + digito1);
        
        const novoCpf = cpfParcial + digito1 + digito2;

        return novoCpf === this.cpfLimpo;
    };

    criaDigito(cpfParcial) {
        const cpfArray = Array.from(cpfParcial);
        let regressivo = cpfArray.length + 1;

        let primeiroDigito = cpfArray.reduce(function(acumulador, valor){
            // console.log(regressivo, valor, regressivo * valor);
            acumulador += (regressivo * Number(valor));
            regressivo--;            
            return acumulador;
        }, 0);       
        const totalDigito = 11 - (primeiroDigito % 11);
        return totalDigito > 9 ? '0': String(totalDigito);
        console.log(totalDigito);
    };

    isSequencia() {
        const sequencia = this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length);
        return sequencia === this.cpfLimpo;
    }
        
}

const cpf = new ValidaCPF('111.111.111-11');

console.log(cpf.valida());