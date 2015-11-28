int m_variableName,n_variableName;
vector<vector<double> > d;
fin >> m_variableName >> n_variableName ;
d.resize(m_variableName);
for(int i = 0; i < m_variableName; ++i) {
	d[i].resize(n_variableName);
}

for(int i = 0; i < m_variableName; ++i) {
   for(int j = 0; j < n_variableName; ++j) {
       fin >> d[i][j];       
   }
}