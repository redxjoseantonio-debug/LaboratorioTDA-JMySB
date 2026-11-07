#include <iostream>
#include <string>
using namespace std;

class cancion{
    public:
        string Titulo;
        string Artista;
        int Duracion;
        cancion(string x, string y, int z){
            Titulo = x;
            Artista = y;
            Duracion = z;
        };

};

string formatoTiempo(int x){
    string mens;
    string m;
    string ss;
    
    m = to_string(x/60);
    ss = to_string(x%60);
    mens = m + ":" + ss;

    return mens;
};


int main() 
{
    cout << "Hello, World!" << endl;

    cancion can1("Loser", "Tame Impala", 221);
    cancion can2("Chicago", "Michael Jackson", 246);

    cout <<"========================"<<endl;
    cout << can1.Titulo << ", " << can1.Artista << ", " << formatoTiempo(can1.Duracion) << endl;
    cout << can2.Titulo << ", " << can2.Artista << ", " << formatoTiempo(can2.Duracion) << endl;
    cout <<"========================"<<endl;

    return 0;
}