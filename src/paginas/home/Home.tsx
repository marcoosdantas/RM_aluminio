import './Home.css'
export default function Home () {
return (<>  
 <body>
    <header>
      <nav>
        <ul className="listateste">
          <div><img id="logo" src="public/rm.png" alt="" /></div>
          <li><a href="#nossosProjetos">Nossos projetos</a></li>
          <li><a href="#sobreNos">Sobre nós</a></li>
          <li><a href="#soliciteOrcamento">Solicite seu orçamento</a></li>
        </ul>
      </nav>
  
    </header>
    <div id="divDescricao">
      <h2 className="descricao">
        A RM Alumínio & Vidro é uma empresa atuante no mercado há 22 anos. Nosso
        objetivo é produzir esquadrias de alumínio com atendimento e soluções
        personalizadas para sua necessidade.
      </h2>
    </div>
    <div className="container">
      <h2 id="nossosProjetos">Nossos projetos</h2>
    </div>
    <div className="row">
      <div className="box">
        <img
          src="public/80BF7651-F404-4844-AA36-A938DEEEEBE9.jpeg"
          alt="Portas pretas de alumínio com painel de vidro"
        />
      </div>
      <div className="box">
        <img
          src="public/B172FEBE-7684-4A49-BC08-E6EE045D5DF3.JPG"
          alt="Portas pretas de alumínio com painel de vidro"
        />
      </div>
      <div className="box">
        <img
          src="public/C16C19CF-A305-4703-8AC3-512316872F9E.jpeg"
          alt="Janela branca em alumínio"
        />
      </div>
    </div>
    <div className="container">
      <h2 id="sobreNos">Sobre nós</h2>
      <p className="descricao">
        Somos uma empresa referência em esquadrias de alumínio, reconhecida e
        atuante no mercado há 22 anos. Prezamos pela qualidade excelência e para
        isso oferecemos equipamentos e materiais de alto padrão e contamos com
        uma equipe especializada e altamente capacitada na realização de
        serviços de colocação.
      </p>
    </div>

    <div className="container">
      <h2 id="soliciteOrcamento">Orçamento de Serralheria</h2>
      <form id="form">
        <label className="descricao" htmlFor="nome">Nome:</label><br />
        <input className="campo-arredondado" type="text" id="nome" name="nome" /><br />

        <label className="descricao" htmlFor="email">E-mail:</label><br />
        <input className="campo-arredondado" type="email" id="email" name="email" /><br />

        <label className="descricao" htmlFor="telefone">Telefone:</label><br />
        <input className="campo-arredondado" type="tel" id="telefone" name="telefone" /><br />

        <label className="descricao" htmlFor="mensagem">Mensagem:</label><br />
        <textarea className="campo-arredondado" id="mensagem" name="mensagem"></textarea><br />

        <input id="botaoEnviar" type="submit" value="Enviar" />
      </form>
    </div>
    <script src="script.ts"></script>
  </body>
</>)
}