class CuentaBancaria {
    #saldo;
    constructor(numero, titular, saldo) {
        if (!Number.isInteger(numero) || numero <= 0) {
            throw new Error("Número de cuenta inválido");
        }
        if (typeof titular !== "string" || !titular.trim()) {
            throw new Error("El titular es obligatorio");
        }
        if (!Number.isFinite(saldo) || saldo < 0) {
            throw new Error("El saldo inicial no puede ser negativo o inválido");
        }
        this.numero = numero;
        this.titular = titular.trim();
        this.#saldo = saldo;
    }
    consultarSaldo() {
        return this.#saldo;
    }
    consignar(valor) {
        if (!Number.isFinite(valor) || valor <= 0) {
            console.log("Valor de consignación inválido");
            return false;
        }
        this.#saldo += valor;
        return true;
    }
    retirar(valor) {
        if (!Number.isFinite(valor) || valor <= 0) {
            console.log("El retiro debe ser mayor que cero");
            return false;
        }
        if (valor > this.#saldo) {
            console.log("Saldo insuficiente");
            return false;
        }
        this.#saldo -= valor;
        return true;
    }
}
class CuentaAhorros extends CuentaBancaria {
    retirar(valor) {
        if (valor > this.consultarSaldo()) {
            console.log("Saldo insuficiente en la cuenta de ahorros");
            return false;
        }

        return super.retirar(valor);
    }
}
class CuentaCorriente extends CuentaBancaria {
    retirar(valor) {
        if (valor > 500000) {
            console.log("Supera el límite de retiro de $500.000");
            return false;
        }

        return super.retirar(valor);
    }
}
const cuentas = [];
function agregarCuenta(cuenta) {
    const repetida = cuentas.some(
        item => item.numero === cuenta.numero
    );
    if (repetida) {
        console.log("Error: el número de cuenta ya existe");
        return false;
    }
    cuentas.push(cuenta);
    console.log("Cuenta registrada correctamente");
    return true;
}
function consultarCuenta(numero) {
    const cuenta = cuentas.find(
        item => item.numero === numero
    );
    if (!cuenta) {
        console.log("Error: la cuenta no existe");
        return null;
    }
    console.log(
        "Titular:", cuenta.titular,
        "| Saldo:", cuenta.consultarSaldo()
    );
    return cuenta;
}
agregarCuenta(new CuentaAhorros(1, "Andres", 1000000));
agregarCuenta(new CuentaCorriente(2, "Juan Camilo", 800000));
cuentas[0].retirar(100000);
cuentas[1].retirar(200000);
cuentas[0].consignar(0);
cuentas[0].consignar(-5000);
cuentas[0].retirar(2000000);
cuentas[1].retirar(600000);
agregarCuenta(new CuentaAhorros(1, "Luisa", 50000));
consultarCuenta(99);
try {
    new CuentaAhorros(3, "Carlos", -50000);
} catch (error) {
    console.log("Error controlado:", error.message);
}
console.log("Saldos finales:");
cuentas.forEach(cuenta => {
    console.log(
        cuenta.numero,
        cuenta.titular,
        cuenta.consultarSaldo()
    );
});
