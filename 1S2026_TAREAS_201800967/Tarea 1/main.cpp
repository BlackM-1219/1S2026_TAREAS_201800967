#include <iostream>
using namespace std;

// Función que recibe parámetros y retorna un resultado
float calcularPromedio(float nota1, float nota2, float nota3)
{
    return (nota1 + nota2 + nota3) / 3;
}

int main()
{
    float n1, n2, n3;

    // Solicitar datos al usuario
    cout << "Ingrese la primera nota: ";
    cin >> n1;
    cout << "Ingrese la segunda nota: ";
    cin >> n2;
    cout << "Ingrese la tercera nota: ";
    cin >> n3;

    // Llamar a la función
    float promedio = calcularPromedio(n1, n2, n3);

    // Mostrar resultado en consola
    cout << "El promedio de las notas es: " << promedio << endl;

    // Ejemplo adicional: determinar si el promedio es aprobado o no
    if (promedio >= 60)
    {
        cout << "El estudiante aprueba la materia." << endl;
    }
    else
    {
        cout << "El estudiante no aprueba la materia." << endl;
    }

    return 0;
}
