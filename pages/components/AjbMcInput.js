import { useEffect, useState } from "react"
import styles from '../../styles/Home.module.css';

function AjbMcInput({label, value, cb}) {
  const [id, setId] = useState();
  const [val, setVal] = useState(value);
  useEffect(() => {
    setId(`ajb-mc-input-id-${Math.floor(Math.random() * 100 + 1)}`)
  }, []);
  return (
    <div className={styles.card}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type="number"
        value={val}
        onChange={(e) => {
          setVal(e.target.value);
          cb(e.target.value);
        }}
      ></input>
    </div>
  )
}

export default AjbMcInput;