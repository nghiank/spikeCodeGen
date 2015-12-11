#include <algorithm>
#include <string>
#include <map>
#include <vector>
#include <list>
#include <array>
#include <set>
#include <unordered_set>
#include <unordered_map>
#include <stack>
#include <deque>
#include <queue>
#include <utility>
#include <functional>
#include <numeric>
#include <sstream>
#include <bitset>
#include <cmath>
#include <cstdio>
#include <cstdlib>
#include <ctime>
#include <fstream>
#include <iostream>

using namespace std;

int sortBall(int a_var,double b_var,string& c_var,vector<int >& d_var,vector<double >& e_var,vector<string >& f_var,vector<vector<int > >& g_var,vector<vector<double > >& h_var) {
	// fill up your solution here
	return 0;
}

template<typename T>
void postProcessing__(T& s) {}

void postProcessing__(string& s) {
    s.erase(s.begin());
    s.erase(s.end() - 1);
}

template<typename T>
void preProcessing__(T& s) {}

void preProcessing__(string& s) {
    s = "\"" + s;
    s += "\"";
}
 
int main(int argc, char* argv[]) {
    //cout << "Hello world" << endl;
    if (argc < 2) return 0;
    string fileName = argv[1];
    //cout << "filename=" << fileName << endl;

    ifstream fin(fileName);
    string outputFileName = fileName + ".out";
    ofstream fout(outputFileName);
    try{
      
        //////////// Declare a_var ///////////////
int a_var;
fin >> a_var;
postProcessing__(a_var);


//////////// Declare b_var ///////////////
double b_var;
fin >> b_var;
postProcessing__(b_var);


//////////// Declare c_var ///////////////
string c_var;
fin >> c_var;
postProcessing__(c_var);


//////////// Declare d_var ///////////////
int sz_d_var;
vector<int > d_var; 
fin >> sz_d_var;
d_var.resize(sz_d_var);
for(int i = 0; i < sz_d_var; ++i) {
   fin >> d_var[i];   
   postProcessing__(d_var[i]);
}
//////////// Declare e_var ///////////////
int sz_e_var;
vector<double > e_var; 
fin >> sz_e_var;
e_var.resize(sz_e_var);
for(int i = 0; i < sz_e_var; ++i) {
   fin >> e_var[i];   
   postProcessing__(e_var[i]);
}
//////////// Declare f_var ///////////////
int sz_f_var;
vector<string > f_var; 
fin >> sz_f_var;
f_var.resize(sz_f_var);
for(int i = 0; i < sz_f_var; ++i) {
   fin >> f_var[i];   
   postProcessing__(f_var[i]);
}
//////////// Declare g_var ///////////////
int m_g_var,n_g_var;
vector<vector<int > > g_var;
fin >> m_g_var >> n_g_var ;
g_var.resize(m_g_var);
for(int i = 0; i < m_g_var; ++i) {
	g_var[i].resize(n_g_var);
}

for(int i = 0; i < m_g_var; ++i) {
   for(int j = 0; j < n_g_var; ++j) {
       fin >> g_var[i][j];
	   postProcessing__(g_var[i][j]);       
   }
}
//////////// Declare h_var ///////////////
int m_h_var,n_h_var;
vector<vector<double > > h_var;
fin >> m_h_var >> n_h_var ;
h_var.resize(m_h_var);
for(int i = 0; i < m_h_var; ++i) {
	h_var[i].resize(n_h_var);
}

for(int i = 0; i < m_h_var; ++i) {
   for(int j = 0; j < n_h_var; ++j) {
       fin >> h_var[i][j];
	   postProcessing__(h_var[i][j]);       
   }
}
        
        int i_var = sortBall(a_var,b_var,c_var,d_var,e_var,f_var,g_var,h_var);
        
        preProcessing__(i_var);
fout << i_var << endl;            
        
    } catch(...) {
      fin.close();
      fout.close();
    }    
    return 0;

}

