#include <iostream>
#include <fstream>
#include <vector>
using namespace std;

void removeQuote(string& s) {
    s.erase(s.begin());
    s.erase(s.end() - 1);
}

vector<int> sortBall(int a, string& b, vector<string>& c) {
    vector<int> r = {1,2,3};
    return r;
}

int main(int argc, char* argv[]) {
    cout << "Hello world" << endl;
    if (argc < 2) return 0;
    string fileName = argv[1];
    cout << "filename=" << fileName << endl;

    ifstream fin(fileName);
    string outputFileName = fileName + ".out";
    ofstream fout(outputFileName);
    try{

       int a;
       fin >> a;
       cout << a << endl;

       string b;
       fin >> b;
       removeQuote(b);


       cout << b << endl;
       

       int szc;
       vector<string> c; 
       fin >> szc;
       c.resize(szc);
       for(int i = 0; i < szc; ++i) {
           fin >> c[i];
           removeQuote(c[i]);
       }

       cout << "szc=" <<szc<<endl;
       for(int i = 0;i < szc; ++i) {
           cout << c[i] << endl;
       }

       int md,nd;
       vector<vector<string> > d;
       fin >> md >> nd ;
       d.resize(md);
       for(int i = 0; i < md; ++i) d[i].resize(nd);

       for(int i = 0; i < md; ++i) {
           for(int j = 0; j < nd; ++j) {
               fin >> d[i][j];
               removeQuote(d[i][j]);
           }
       }

       cout << "md=" << md << ",nd=" << nd <<endl;
       for(int i = 0; i < md; ++i) {
           for(int j = 0; j < nd; ++j) {
               cout << "\"" << d[i][j] << "\"" << "  ";
           }
           cout <<endl;
       }

       double e;
       fin >> e;
       cout << "e=" << e << endl;

       int szf;
       fin>> szf;
       vector<int> f(szf);
       for(int i = 0; i < szf; ++i) {
           fin >> f[i];
       }

       cout << "szf="  << szf <<endl;
       for(auto i : f) {
           cout << i << "  " ;
       }
       cout <<endl;

       vector<int> res = sortBall(a, b, c);
       for(int i = 0; i < res.size(); ++i) {
           fout << res[i] << " \n"[i==(res.size()-1)];
       }
       vector<vector<string> > r =  { {"abc", "def"}, {"ge","ef"} };
       int mr = r.size();
       int nr = mr==0 ? 0 : r[0].size();
       fout << mr << " " << nr <<endl;
       for(int i = 0; i < r.size(); ++i) {
           for(int j = 0; j < r[i].size(); ++j) {
               fout << "\"" << r[i][j] << "\"" << " \n"[i==(res.size()-1)];
           }
       }
       fout << endl;
    } catch(...) {
      fin.close();
      fout.close();
    }
    
    return 0;

}
