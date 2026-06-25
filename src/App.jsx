import { useState, useCallback, useMemo } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import Myheader from "./components/Myheader";
import Nav from "./components/Nav";
import MyArticle from "./components/MyArticle";
import Controls from "./components/controls";
import CreateArticle from "./components/createArticle";
import UpdateArticle from "./components/UpdateArticle";

function App() {
  console.log("App render");
  const [id, setId] = useState("1");
  const [mode, setMode] = useState("welcome");
  // const [subject, setSubject] = useState({
  //   title: "프론트엔드 개발자",
  //   desc: "기본언어인 html, css, javascript부터 학습합니다.",
  // });
  const [content, setContent] = useState([
    {
      id: "1",
      title: "UI/UX 개발",
      desc: "사용자 경험을 고려한 직관적이고 반응성 높은 화면 구현",
      difficultyLevel: 1,
    },
    {
      id: "2",
      title: "재사용이 가능한 UI 개발",
      desc: "컴포넌트 기반으로 동일한 UI를 효율적으로 재사용 가능",
      difficultyLevel: 2,
    },
    {
      id: "3",
      title: "애니메이션 구현",
      desc: "상태 변화에 따른 자연스럽고 동적인 화면 효과 구현",
      difficultyLevel: 3,
    },
  ]);

  const welcome = { title: "welcome", desc: "Welcome to react" };
  const subject = {
    title: "프론트엔드 개발자",
    desc: "기본언어인 html, css, javascript부터 학습합니다.",
  };

  const handleChangeMode = useCallback(_id => {
    setMode("read");
    setId(_id);
  }, []);

  const handleDelete = () => {
    if (window.confirm("정말 삭제할까요?")) {
      setContent(prev => prev.filter(item => item.id !== id));
    }
    setMode("welcome");
  };

  const selectedArticle = useMemo(() => content.find(item => item.id === id), [content, id]);

  const handleSubmitCreate = (_title, _desc, _difficultyLevel) => {
    const newId = uuidv4();
    let _contents = content.concat({
      id: newId,
      title: _title,
      desc: _desc,
      difficultyLevel: _difficultyLevel,
    });
    setContent(_contents);
    setId(newId);
    setMode("read");
  };

  const handleSubmitUpdate = (_title, _desc, _difficultyLevel) => {
    setContent(prev =>
      prev.map(p =>
        p.id === id ? { ...p, title: _title, desc: _desc, difficultyLevel: _difficultyLevel } : p,
      ),
    );
    setMode("read");
  };

  const renderArticle = () => {
    switch (mode) {
      case "read":
        return (
          <MyArticle
            title={selectedArticle?.title ?? welcome.title}
            desc={selectedArticle?.desc ?? welcome.desc}
            difficultyLevel={selectedArticle?.difficultyLevel ?? welcome.difficultyLevel}
            onChangeMode={() => {
              setMode("update");
            }}
            onDelete={handleDelete}
          />
        );
      case "create":
        return <CreateArticle onSubmit={handleSubmitCreate} />;
      case "update":
        return (
          <UpdateArticle
            title={selectedArticle.title}
            desc={selectedArticle.desc}
            difficultyLevel={selectedArticle.difficultyLevel}
            onSubmit={handleSubmitUpdate}
          />
        );
      default:
        return <MyArticle title={welcome.title} desc={welcome.desc} />;
    }
  };

  return (
    <>
      <Myheader
        title={subject.title}
        desc={subject.desc}
        onChangeMode={() => {
          setMode("welcome");
        }}
      />
      <Nav data={content} onChangeMode={handleChangeMode} />
      {renderArticle()}
      <hr />
      <Controls
        onChangeMode={() => {
          setMode("create");
        }}
      />
    </>
  );
}

export default App;
