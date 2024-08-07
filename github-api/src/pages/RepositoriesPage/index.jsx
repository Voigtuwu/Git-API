import React, {useState} from "react";
import { Container, Sidebar, Main } from "./styles";
import Profile from "./Profile";
import Filter from "./Filter";
import Repositories from "./Repositories";
import { getLangsFrom } from "../../services/api";

function RepositoriesPage() {

  const [currentLang, setCurrentLang] = useState('');

  const user = {
    login: "Voigtuwu",
    name: "Lucas Voigt",
    avatar_url: "https://avatars.githubusercontent.com/u/87502643?v=4",
    followers: 0,
    following: 0,
    company: null,
    blog: "",
    location: "Petrópolis - RJ",
  };

  const repositories = [
    {
      id: '1',
      name: "Repo 1",
      description: "Descricao",
      html_url: "https://github.com/Voigtuwu/Git-API",
      language: "Java",
    },
    {
      id: '2',
      name: "Repo 2",
      description: "Descricao",
      html_url: "https://github.com/Voigtuwu/Git-API",
      language: "JavaScript",
    },
    {
      id: '3',
      name: "Repo 3",
      description: "Descricao",
      html_url: "https://github.com/Voigtuwu/Git-API",
      language: "Typescript",
    },
    {
      id: '4',
      name: "Repo 4",
      description: "Descricao",
      html_url: "https://github.com/Voigtuwu/Git-API",
      language: "Python",
    },
    {
      id: '5',
      name: "Repo 5",
      description: "Descricao",
      html_url: "https://github.com/Voigtuwu/Git-API",
      language: "PHP",
    },
    {
      id: '6',
      name: "Repo 6",
      description: "Descricao",
      html_url: "https://github.com/Voigtuwu/Git-API",
      language: "Java",
    },
  ];

  const languages = getLangsFrom(repositories);

  const onFilterClick = (language) => {
    setCurrentLang(language);
  };

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
        repositories={repositories} 
        currentLang={currentLang}
        />
      </Main>
    </Container>
  );
}

export default RepositoriesPage;
