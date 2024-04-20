
import './App.css';
import { useTranslation } from 'react-i18next';
import i18n from './translation/i18n';
import { useEffect, useState } from 'react';

function App() {
  const { t } = useTranslation();
  const [dictionaries, setDictionaries] = useState({});
  const [curKey, setCurKey] = useState({
    key: "",
    val: ""
  })
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch('http://localhost:8080/dictionaries');
      let result = await data.json();
      result = result.content || {};
      setDictionaries(result);
      let list = Object.keys(result);
      if(list.length) {
        setCurKey({
          key: list[0],
          val: result[list[0]]
        })
      }
    }
    fetchData();    
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(curKey);
    fetch("http://localhost:8080/update-dictionaries", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.

      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(curKey), // body data type must match "Content-Type" header
    });
  }
  return (
    <>
      <button onClick={() => changeLanguage('vi')}>vi</button> - <button onClick={() => changeLanguage('en')}>en</button>
      <h1>{t('content.greeting')}</h1>
      <form className="dic-edited" onSubmit={handleSubmit}>
        <select name="" id="" defaultValue={curKey.key} onChange={e => setCurKey({
          key: e.target.value,
          val: dictionaries[e.target.value]
        })}>
          {
            Object.keys(dictionaries).map(item => <option key={`key-${item}`} value={item}>{item}</option>)
          }
        </select>
        <input type="text" defaultValue={curKey.val} onChange={e => setCurKey({
          ...curKey,
          val: e.target.value
        })}/>
        <button>Submit</button>
      </form>
    </>
  )
}

export default App
