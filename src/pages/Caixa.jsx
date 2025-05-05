import { useState, useEffect } from "react";
import Button from "./Button";
import Input from "./Input";
import Mensagem from "./Mensagem";
import './Caixa.css'

const Caixa = () => {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [fraseFinal, setFraseFinal] = useState('');
  const [errors, setErrors] = useState({ nome: '', sobrenome: '' });

  const validateInputs = () => {
    let valid = true;
    const newErrors = { nome: '', sobrenome: '' };

    if (!nome.trim()) {
      newErrors.nome = <span className="alerta">Nome é obrigatório</span>
      valid = false;
    }

    if (!sobrenome.trim()) {
      newErrors.sobrenome = <span className="alerta">Sobrenome é obrigatório</span>
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const pegarNomeESobrenome = () => {
    localStorage.setItem('userData', JSON.stringify({ nome, sobrenome }));

    if (!validateInputs()) return;

    setFraseFinal(
      <div className="success-message">
        <p>Cadastro válido!</p>
        <p>Obrigado <strong>{nome} {sobrenome}</strong></p>
      </div>
    );
  };
  const apagarTudo = (e) => {
    e.preventDefault();
    setNome('')
    setSobrenome('');
    setFraseFinal('');
  };

  useEffect(() => {
    const savedData = localStorage.getItem('userData');
    if (savedData) {
      const { nome, sobrenome } = JSON.parse(savedData);
      setNome(nome);
      setSobrenome(sobrenome);
    }
  }, []);

  return (
    <div className="container-caixa">
      {fraseFinal === '' && <h2 className="textTop">Cadastrar<br />Nome Completo</h2>}
      {fraseFinal != '' && <h2 className="textTop">Obrigado<br />por Preencher!</h2>}
      <div className="container-inputs">
        <Input
          placeHolderNome={'Digite seu Nome'}
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          id='nomeId'
          error={errors.nome}
          texto='Nome'
        />
        <Input
          placeHolderNome={'Digite seu Sobrenome'}
          value={sobrenome}
          onChange={(e) => setSobrenome(e.target.value)}
          id='sobrenomeId'
          error={errors.sobrenome}
          texto='Sobrenome'
        />
      </div>
      <Mensagem exibirMsg={fraseFinal} />
      <div className="container-btns-option">
        <Button id='custom-button-exibir' textButton={'Exibir'} onClick={pegarNomeESobrenome} />
        <Button id='custom-button-limpar' textButton={'Limpar'} onClick={apagarTudo} />
      </div>

    </div>
  );
};

export default Caixa;