int sz_variableName;
vector<string> variableName; 
fin >> sz_variableName;
c.resize(sz_variableName);
for(int i = 0; i < sz_variableName; ++i) {
   fin >> c[i];
   removeQuote(c[i]);
}