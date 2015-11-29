//////////// Declare variableName ///////////////
int sz_variableName;
variableType variableName; 
fin >> sz_variableName;
c.resize(sz_variableName);
for(int i = 0; i < sz_variableName; ++i) {
   fin >> variableName[i];   
   postProcessing__(variableName[i]);
}