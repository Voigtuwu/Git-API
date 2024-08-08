import React, {useEffect, useState} from "react";
import { Container, Sidebar, Main, Load } from "./styles";
import Profile from "./Profile";
import Filter from "./Filter";
import Repositories from "./Repositories";
import { getLangsFrom, getUser, getRepos } from "../../services/api";

function RepositoriesPage() {
  const [repos, setRepos] = useState('');
  const [user, setUser] = useState('');
  const [languages, setLanguages] = useState('');
  const [currentLang, setCurrentLang] = useState('');
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const [userResponse, reposResponse] = await Promise.all([getUser('Voigtuwu'), getRepos('Voigtuwu')]);

      setUser(userResponse.data);
      setRepos(reposResponse.data);
      setLanguages(getLangsFrom(reposResponse.data));
      setLoad(false);
    }
    loadData();
  }, []);


  const onFilterClick = (language) => {
    setCurrentLang(language);
  };

  if(load){
    return <Load>Carregando, aguarde um momento.</Load>
  }

  return (
    <Container>
      <Sidebar>
        <Profile user={user} />
        <Filter 
        languages={languages}
        currentLang={currentLang}
        onClick={onFilterClick}
        />
      </Sidebar>
      <Main>
        <Repositories
        repositories={repos} 
        currentLang={currentLang}
        />
      </Main>
    </Container>
  );
}

export default RepositoriesPage;
