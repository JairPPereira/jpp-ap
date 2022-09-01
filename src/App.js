import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



import Porcategoria from './components/pages/Porcategoria';
import TVs from './components/pages/TVs';
import Acao from './components/pages/Acao';
import Comedia from './components/pages/Comedia';
import A2067 from './components/pages/2067';
import Radios from './components/pages/Radios';
import Ficcao from './components/pages/Ficcao';
import Romance from './components/pages/Romance';
import Acertodecontas from "./components/pages/Acertodecontas";
import Aparelhagens from "./components/pages/Aparelhagens";
import Atualidade from './components/pages/Atualidade';
import Diario from './components/pages/Diario';
import Daaz from './components/pages/Daaz';
import Graopara from './components/pages/Graopara';
import Boasnovas from './components/pages/Boasnovas';
import Fmodia from './components/pages/Fmodia';
import Aformadaagua from './components/pages/Aformadaagua';
import Rba from './components/pages/Rba';
import Recordnews from './components/pages/Recordnews';
import Sbt from './components/pages/Sbt';
import Agoraestamossos from './components/pages/Agoraestamossos';
import Assasinatosdopassado from './components/pages/Assasinatosdopassado';
import Airplanevsvolcano from './components/pages/Airplanevsvolcano';
import Ajusticeira from './components/pages/261037';
import Albertnobbs from './components/pages/Albertnobbs';
import Alemdohorizonte from './components/pages/Alemdohorizonte';
import Amorzumbi from './components/pages/Amorzumbi';
import Anjosdanoite from './components/pages/Anjosdanoite';
import Anovaondadoimperador from './components/pages/Anovaondadoimperador';
import Aqualquerpreco from './components/pages/Aqualquerpreco';
import Assasinosdealuguel from './components/pages/Assasinosdealuguel';
import Batalhadosimperios from './components/pages/Batalhadosimperios';
import Bloodrayne3 from './components/pages/Bloodrayne3';
import Cacadoresderecompensas from './components/pages/Cacadoresderecompensas';
import Cargaexplosiva3 from './components/pages/Cargaexplosiva3';
import Chef from './components/pages/Chef';
import Codigodeconduta from './components/pages/Codigodeconduta';
import Coragemparaamar from './components/pages/Coragemparaamar';
import Cosmopolis from './components/pages/Cosmopolis';
import Criatura from './components/pages/Criatura';
import Cubo from './components/pages/Cubo';
import Distrito13o from './components/pages/Distrito13o';
import Duna from './components/pages/Duna';
import Embuscadevinganca from './components/pages/Embuscadevinganca';
import Entreirmaos from './components/pages/Entreirmaos';
import Entreoamoreafama from './components/pages/Entreoamoreafama';
import Finch from './components/pages/Finch';
import Ghostland from './components/pages/Ghostland';
import Homemaranha from './components/pages/Homemaranha';
import Hoteldosdinossauros from './components/pages/Hoteldosdinossauros';
import Jesuskid from './components/pages/Jesuskid';
import Megalodon from './components/pages/Megalodon';
import Minhamaeeumaviagem from './components/pages/Minhamaeeumaviagem';
import Ninja from './components/pages/Ninja';
import Ocaminho from './components/pages/Ocaminho';
import Ocladasadagas from './components/pages/Ocladasadagas';
import Ocontodoscontos from './components/pages/Ocontodoscontos';
import Odespertar from './components/pages/Odespertar';
import Ohomemdamafia from './components/pages/Ohomemdamafia';
import Oimbativelreden from './components/pages/Oimbativelreden';
import Olhosfamintos from './components/pages/Olhosfamintos';
import Oparamo from './components/pages/Oparamo';
import Ospecialistas from './components/pages/Osespecialistas';
import Tophits from './components/pages/Tophits';
import Videoclips from './components/pages/Vdeoclips';
import Osmercenarios2 from './components/pages/Osmercenarios2';
import Psicopataamericano2 from './components/pages/Psicopataamericano2';
import Re1sident from './components/pages/Re1sident';
import Residentevilbem from './components/pages/Residentevilbem';
import Redencao from './components/pages/Redencao';
import Relacaoexplosiva from './components/pages/Relacaoexplosiva';
import Ruslan from './components/pages/Ruslan';
import Sextafeira13 from './components/pages/Sextafeira13';
import Sonic from './components/pages/Sonic';
import Tempo from './components/pages/Tempo';
import Umamorprarecordar from './components/pages/Umamorprarecordar';
import Ummatchsurpresa from './components/pages/Ummatchsurpresa';
import Ummotoristaemapuros from './components/pages/Ummotoristaemapuros';
import Umnegocioderisco from './components/pages/Umnegocioderisco';
import Umpobretaoncsb from './components/pages/Umpobretaoncsb';
import Ascensaoeqdui from './components/pages/Ascensaoeqdui';
import Homemaranha2 from './components/pages/Homemaranha2';
import Supermurali from './components/pages/Supermurali';
import Terror from './components/pages/Terror';
import Suspense from './components/pages/Suspense';
import Stretfp from './components/pages/Stretfp';
import Codinome7 from './components/pages/Codinome7';
import Umjovememapuros from './components/pages/Umjovememapuros';
import Tudopraficarcomela from './components/pages/Tudopraficarcomela';
import Odoadordememorias from './components/pages/Odoadordememorias';
import Atumbadodiabo from './components/pages/Atumbadodiabo';
import Jogandocomoamor from './components/pages/Jogandocomoamor';
import Loucamenteapaixonados from './components/pages/Loucamenteapaixonados';
import Cadaveresardm from './components/pages/Cadaveresardm';
import Agentesduplos from './components/pages/Agentesduplos';
import Aslaminasdje from './components/pages/Aslaminasdje';
import Ogritodamorte from './components/pages/Ogritodamorte';
import Drama from './components/pages/Drama';
import Kv1 from './components/pages/Kv1';
import Ocomitedd from './components/pages/Ocomitedd';
import Fundingyou from './components/pages/Fundingyou';
import Teste from './components/pages/Teste';
import Fungindodopassado from './components/pages/Fugindodopassado';
import Atravessia from './components/pages/Atravessia';
import Aturmadamonica from './components/pages/Aturmadamonica';
import Series from './components/pages/Series';
import Playlistyou from './components/pages/Playlistyou';
import Playcda from './components/pages/Playcda';
import Playclass from './components/pages/Playclass';
import Magali from './components/pages/Magali';
import Monica from './components/pages/Monica';
import Cebolinha from './components/pages/Cebolinha';
import Playnetmovie from './components/pages/Playnetmovie';
import Cascao from './components/pages/Cascao';
import Milena from './components/pages/Milena';
import Perfeicao from './components/pages/Perfeicao';
import Segredo from './components/pages/Segredo';
import Lama from './components/pages/Lama';
import Pagandobqmt from './components/pages/Pagandobqmt';
import Aventura from './components/pages/Aventura';
import Gossebump2 from './components/pages/Gossebump2';
import Aeradogelo2 from './components/pages/Aeradogelo2';
import Tresninjas from './components/pages/Tresninjas';
import Ocavaleirod from './components/pages/Ocavaleirod';
import Boltsc from './components/pages/Boltsc';
import Gatodebotas from './components/pages/Gatodebotas';
import Zero7cr from './components/pages/Zero7cr';
import Pedrocoelho2 from './components/pages/Pedrocoelho2';
import Eternos from './components/pages/Eternos';
import Apenasus from './components/pages/Apenasus';
import Operacoese from './components/pages/Operacoese';
import Momentum from './components/pages/Momentum';
import Trovao from './components/pages/Trovao';
import Pokemon from './components/pages/Pokemon';
import Centauro from './components/pages/Centauro';
import Sereia2 from './components/pages/Sereia2';
import Scooby from './components/pages/Scooby';
import Reileao from './components/pages/Reileao';
import Afilhadorei from './components/pages/Afilhadorei';
import Otrapaceiro from './components/pages/Otrapaceiro';
import Deencontrosam from './components/pages/Deencontrosam';
import Details from './components/pages/det';
import Daaz2 from './components/pages/Daaz2';
import Daaz3 from './components/pages/Daaz3';
import Daaz4 from './components/pages/Daaz4';
import Crime from './components/pages/Crime';
import Animacao from './components/pages/Animacao';
import Fantasia from './components/pages/Fantasia';
import Daaz5 from './components/pages/Daaz5';
import Campeoesdos from './components/pages/Campeoesdos';
import Diashoje from './components/pages/Diashoje';
import Acao2 from './components/pages/Acao2';
import Afamilia from './components/pages/Afamilia';
import Sanguenaveia from './components/pages/Sanguenaveia';
import Daaz6 from './components/pages/Daaz6';
import Tubaraodem from './components/pages/Tubaraodem';
import Ocongressof from './components/pages/Ocongressof';
import Bravestorm from './components/pages/BraveStorm';
import Notodopoder from './components/pages/Notopodopoder';
import Acasamonstro from './components/pages/Acasamonstro';
import Aeradogelob from './components/pages/Aeradogelob';
import Faroestecabloco from './components/pages/Faroestecabloco';
import Mulheresaomar2 from './components/pages/Mulheresaomar2';
import Tormenta from './components/pages/Tormenta';
import Samurayx2 from './components/pages/Samurayx2';
import Elvis from './components/pages/Elvis';
import Osdezmandamentos from './components/pages/Osdezmandamentos';
import Olivroderute from './components/pages/Olivroderute';
import Omongeapdb from './components/pages/Omongeapdb';
import Acasadomedo from './components/pages/Acasadomedo';
import Ajornadadevivo from './components/pages/Ajornadadevivo';
import Alendadmc from './components/pages/Alendadmc';
import Aranhas from './components/pages/Aranhas';
import Acolonia from './components/pages/Acolonia';
import Alegiao from './components/pages/Alegiao';
import Avitimaperfeita from './components/pages/Avitimaperfeita';
import Osdeusesdel2 from './components/pages/Os deusesdel2';
import Daaz7 from './components/pages/Daaz7';
import Oladobomdavida from './components/pages/Oladobomdavida';
import Aprincesa from './components/pages/Aprincesa';
import Amaldicaodi from './components/pages/Amaldicaodi';
import Aviuvads from './components/pages/Aviuvads';
import Embuscadaliberdade from './components/pages/Embuscadaliberdade';
import Tudoporjustica from './components/pages/Tudoporjusitca';
import Assasinosde from './components/pages/Assasinosde';
import Loucaspade from './components/pages/Loucaspade';
import Batman from './components/pages/Batman';
import Matrixr from './components/pages/Matrixr';
import Encanto from './components/pages/Encanto';
import Osdozemacacos from './components/pages/Osdozemacacos';
import Osdozec from './components/pages/Osdozec';
import Omercadordv from './components/pages/Omercadordv';
import Omensageiro from './components/pages/Omensageiro';
import Higthschool from './components/pages/Higthschool';
import Oprecodg from './components/pages/Oprecodg';
import Porquees from './components/pages/Porquees';
import Nezhacpv from './components/pages/Nezhacpv';
import Terrorns from './components/pages/Terrorns';
import Daaz8 from './components/pages/Daaz8';
import Emnomedopai from './components/pages/Emnomedopai';
import Ateofinal from './components/pages/Ateofinal';
import Aturmadam24 from './components/pages/Aturmadam24';
import Gamert1e1 from './components/pages/Gamert1e1';
import Gameoft from './components/pages/Gameoft';
import Details2 from './components/pages/Detail2';
import Gameoftr from './components/pages/Gameoftr';
import Gamert1e2 from './components/pages/Gamert1e2';
import Gamert1e3 from './components/pages/Gamert1e3';
import Assasinoapf from './components/pages/Assasinoapf';
import Tempodc from './components/pages/Tempodc';
import Gamert1e4 from './components/pages/Gamert1e4';
import Drama2 from './components/pages/Drama2';
import Apostolopauc from './components/pages/Apostolopauc';
import Amordoentio from './components/pages/Amordoentio';
import Gamert1e5 from './components/pages/Gamert1e5';
import Plutotdam from './components/pages/Plutotdam';
import Canaisp from './components/pages/Canaisp';
import Plutoser from './components/pages/Plutoser';
import Canaisrun from './components/pages/Canaisrun';
import Runtimepri from './components/pages/Runtimepri';
import Runtimecom from './components/pages/Runtimecom';
import Runtimeacao from './components/pages/Runtimeacao';
import Itvtv from './components/pages/Itvtv';
import Globonews from './components/pages/Globonews';
import Bandnews from './components/pages/Bandnews';
import Disneyc from './components/pages/Disneyc';
import Cnnbr from './components/pages/Cnnbr';
import Morbius from './components/pages/Morbius';
import Afamiliab from './components/pages/Afamiliab';
import TVsp from './components/pages/Tvsp';
import Bandsp from './components/pages/Bandsp';
import Dazn from './components/pages/Dazn';
import Commebol1 from './components/pages/Commebol1';
import Premier from './components/pages/Premier';
import Premiere2 from './components/pages/Premiere2';
import Agenteo from './components/pages/Agenteo';
import Jornalismo from './components/pages/Jornalismo';
import Jogosv from './components/pages/Jogosv';
import Espn from './components/pages/Espn';
import Sporttv from './components/pages/Sporttv';
import Jogosvec from './components/pages/Jogosvec';
import Sporttv2 from './components/pages/Sporttv2';
import Tvab from './components/pages/Tvab';
import Conmebol2 from './components/pages/Conmebol2';
import Espn2 from './components/pages/Espn2';
import Conmebol3 from './components/pages/Conmebol3';
import Sporttv3 from './components/pages/Sporttv3';
import Espn3 from './components/pages/Espn3';
import Tnts1 from './components/pages/Tnts1';
import Premiere3 from './components/pages/Premiere3';
import Jogosve1 from './components/pages/Jogosve1';
import Jogosvef from './components/pages/Jogosvef';
import Comedia2 from './components/pages/Comedia2';
import Cafeina from './components/pages/Cafeina';
import Acarga from './components/pages/Acarga';
import Tntsport5 from './components/pages/Tntsports5';
import Tntsports7 from './components/pages/Tntsports7';
import Tntsports8 from './components/pages/Tntsports8';
import Megapix from './components/pages/Megapix';
import Cadeoh from './components/pages/Cadeoh';
import Jogadadm from './components/pages/Jogadadm';
import Tvsf from './components/pages/Tvsf';
import Hbof from './components/pages/Hbof';
import Comedyc from './components/pages/Comedyc';
import Globom from './components/pages/Globom';
import Globosp from './components/pages/Globosp';
import Teste2 from './components/pages/Teste2';
import Epiphaneap from './components/pages/Epiphaneap';
import Ajornadauvt from './components/pages/Ajornadauvt';
import Daaz9 from './components/pages/Daaz9';
import Opredadora from './components/pages/Opredadora';
import Thewd from './components/pages/Thewd';
import Recordrj from './components/pages/Recordrj';
import Topgun from './components/pages/Topgun';
import Osalvador from './components/pages/Osalvador';
import Obsessao from './components/pages/Obsessao';
import Redetv from './components/pages/Redetv';
import Recordsc from './components/pages/Recordsc';
import Poderel from './components/pages/Poderel';
import Linewalker2 from './components/pages/Linewalker2';
import Superhli from './components/pages2/Superhli';
import Ossimpson from './components/pages2/Ossimpson';
import Ummaluconp from './components/pages2/Ummaluconp';
import Tropadeelite from './components/pages2/Tropadeelite';
import Tropadeelite2 from './components/pages2/Tropadeelite2';
import Twinpeaks from './components/pages/Twinpeaks';
import Vinhodv from './components/pages/Vinhodv';
import Lacosdn from './components/pages/Lacosdn';
import Powerr from './components/pages/Powerr';
import Oreidamontanha from './components/pages/Oreidamontanha';
import Oagentemirim from './components/pages/Oagentemirim';
import Teste3 from './components/pages/Teste3';
import Warnertv from './components/pages/Warnertv';
import Anuvem from './components/pages/Anuvem';
import Aprincesaap from './components/pages/Apricesaap';
import Friends from './components/pages/Friends';
import Amityvilleot from './components/pages/Amityvilleot';
import Euronews from './components/pages/Euronews';
import Parttk from './components/pages/Parttk';
import Trezec from './components/pages/Trezec';
import Cindiel from './components/pages/Cindiel';
import Asfotosv from './components/pages/Asfotosv';
import Alertav from './components/pages/Alertav';
import Tvamulherb from './components/pages/Tvamulherb';
import Homemasa from './components/pages/Homemasa';
import Aerademc from './components/pages/Aerademc';
import Megasvc from './components/pages/Megasvc';
import Daaz10 from './components/pages/Daaz10';
import Amenteqm from './components/pages/Amenteqm';
import Oresgateduv from './components/pages/Oresgateduv';
import Documentarios from './components/pages/Documentarios';
import Mamonasps from './components/pages/Mamonasps';
import Afacedua from './components/pages/Afacedua';
import Seriegot from './components/pages/Seriegot';
import Youtubeml from './components/pages/Youtubeml';
import Gabriela from './components/gabriela/Gabriela';
import Novelas from './components/pages/Novelas';
import Gabriela1 from './components/gabriela/Gabriela1';











function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/porcategoria' component={Porcategoria} />
        <Route path='/daaz' component={Daaz} />
        <Route path='/daaz2' component={Daaz2} />
        <Route path='/daaz3' component={Daaz3} />
        <Route path='/daaz4' component={Daaz4} />
        <Route path='/daaz5' component={Daaz5} />
        <Route path='/daaz6' component={Daaz6} />
        <Route path='/daaz7' component={Daaz7} />
        <Route path='/daaz8' component={Daaz8} />
        <Route path='/daaz9' component={Daaz9} />
        <Route path='/tvs' component={TVs} />
        <Route path='/tvab' component={Tvab} />
        <Route path='/tvsf' component={Tvsf} />
        <Route path='/jornalismo' component={Jornalismo} />
        <Route path='/tvsp' component={TVsp} />
        <Route path='/bandsp' component={Bandsp} />
        <Route path='/dazn' component={Dazn} />
        <Route path='/commebol1' component={Commebol1} />
        <Route path='/conmebol2' component={Conmebol2} />
        <Route path='/conmebol3' component={Conmebol3} />
        <Route path='/premier' component={Premier} />
        <Route path='/premiere2' component={Premiere2} />
        <Route path='/premiere3' component={Premiere3} />
        <Route path='/radios' component={Radios} />
        <Route path='/acao' component={Acao} />
        <Route path='/animacao' component={Animacao} />
        <Route path='/comedia' component={Comedia} />
        <Route path='/comedia2' component={Comedia2} />
        <Route path='/crime' component={Crime} />
        <Route path='/fantasia' component={Fantasia} />
        <Route path='/528085' component={A2067} />
        <Route path='/ficcao' component={Ficcao} />
        <Route path='/romance' component={Romance} />
        <Route path='/91333' component={Acertodecontas} />
        <Route path='/aparelhagens' component={Aparelhagens} />
        <Route path='/atualidade' component={Atualidade} />
        <Route path='/diario' component={Diario} />
        <Route path='/graopara' component={Graopara} />
        <Route path='/boasnovas' component={Boasnovas} />
        <Route path='/fmodia' component={Fmodia} />
        <Route path='/399055' component={Aformadaagua} />
        <Route path='/rba' component={Rba} />
        <Route path='/recordnews' component={Recordnews} />
        <Route path='/sbt' component={Sbt} />
        <Route path='/451877' component={Agoraestamossos} />
        <Route path='/191137' component={Assasinatosdopassado} />
        <Route path='/258210' component={Airplanevsvolcano} />
        <Route path='/261037' component={Ajusticeira} />
        <Route path='/73873' component={Albertnobbs} />
        <Route path='/271404' component={Alemdohorizonte} />
        <Route path='/77067' component={Amorzumbi} />
        <Route path='/277' component={Anjosdanoite} />
        <Route path='/11688' component={Anovaondadoimperador} />
        <Route path='/9422' component={Aqualquerpreco} />
        <Route path='/122800' component={Assasinosdealuguel} />
        <Route path='/300168' component={Batalhadosimperios} />
        <Route path='/12685' component={Bloodrayne3} />
        <Route path='/13387' component={Cargaexplosiva3} />
        <Route path='/209504' component={Cacadoresderecompensas} />
        <Route path='/212778' component={Chef} />
        <Route path='/22803' component={Codigodeconduta} />
        <Route path='/461958' component={Coragemparaamar} />
        <Route path='/49014' component={Cosmopolis} />
        <Route path='/73963' component={Criatura} />
        <Route path='/792678' component={Cubo} />
        <Route path='/15357' component={Distrito13o} />
        <Route path='/438631' component={Duna} />
        <Route path='/390051' component={Embuscadevinganca} />
        <Route path='/7445' component={Entreirmaos} />
        <Route path='/495386' component={Entreoamoreafama} />
        <Route path='/522402' component={Finch} />
        <Route path='/523638' component={Ghostland} />
        <Route path='/557' component={Homemaranha} />
        <Route path='/839440' component={Hoteldosdinossauros} />
        <Route path='/853666' component={Jesuskid} />
        <Route path='/523931' component={Megalodon} />
        <Route path='/82687' component={Minhamaeeumaviagem} />
        <Route path='/25602' component={Ninja} />
        <Route path='/ocaminho' component={Ocaminho} />
        <Route path='/457837' component={Ocladasadagas} />
        <Route path='/314405' component={Ocontodoscontos} />
        <Route path='/77949' component={Odespertar} />
        <Route path='/64689' component={Ohomemdamafia} />
        <Route path='/8922' component={Olhosfamintos} />
        <Route path='/38234' component={Oimbativelreden} />
        <Route path='/800410' component={Oparamo} />
        <Route path='/49021' component={Ospecialistas} />
        <Route path='/tophits' component={Tophits} />
        <Route path='/vdeoclips' component={Videoclips} />
        <Route path='/76163' component={Osmercenarios2} />
        <Route path='/10726' component={Psicopataamericano2} />
        <Route path='/re1sident' component={Re1sident} />
        <Route path='/460458' component={Residentevilbem} />
        <Route path='/redencao' component={Redencao} />
        <Route path='/109513' component={Relacaoexplosiva} />
        <Route path='/ruslan' component={Ruslan} />
        <Route path='/13207' component={Sextafeira13} />
        <Route path='/454626' component={Sonic} />
        <Route path='/631843' component={Tempo} />
        <Route path='/10229' component={Umamorprarecordar} />
        <Route path='/734265' component={Ummatchsurpresa} />
        <Route path='/376581' component={Ummotoristaemapuros} />
        <Route path='/334527' component={Umnegocioderisco} />
        <Route path='/9776' component={Umpobretaoncsb} />
        <Route path='/333167' component={Ascensaoeqdui} />
        <Route path='/558' component={Homemaranha2} />
        <Route path='/657644' component={Supermurali} />
        <Route path='/terror' component={Terror} />
        <Route path='/suspense' component={Suspense} />
        <Route path='/687354' component={Stretfp} />
        <Route path='/73499' component={Codinome7} />
        <Route path='/umjovememapuros' component={Umjovememapuros} />
        <Route path='/259018' component={Tudopraficarcomela} />
        <Route path='/227156' component={Odoadordememorias} />
        <Route path='/17577' component={Atumbadodiabo} />
        <Route path='/672772' component={Jogandocomoamor} />
        <Route path='/60420' component={Loucamenteapaixonados} />
        <Route path='/417180' component={Cadaveresardm} />
        <Route path='/505579' component={Agentesduplos} />
        <Route path='/418808' component={Aslaminasdje} />
        <Route path='/340185' component={Ogritodamorte} />
        <Route path='/drama' component={Drama} />
        <Route path='/drama2' component={Drama2} />
        <Route path='/556018' component={Kv1} />
        <Route path='/653024' component={Ocomitedd} />
        <Route path='/769749' component={Fundingyou} />
        <Route path='/teste' component={Teste} />
        <Route path='/23520' component={Fungindodopassado} />
        <Route path='/391486' component={Atravessia} />
        <Route path='/157485' component={Aturmadamonica} />
        <Route path='/series' component={Series} />
        <Route path='/playlistyou' component={Playlistyou} />
        <Route path='/playcda' component={Playcda} />
        <Route path='/playclass' component={Playclass} />
        <Route path='/magali' component={Magali} />
        <Route path='/monica' component={Monica} />
        <Route path='/cebolinha' component={Cebolinha} />
        <Route path='/playnetmovie' component={Playnetmovie} />
        <Route path='/cascao' component={Cascao} />
        <Route path='/milena' component={Milena} />
        <Route path='/perfeicao' component={Perfeicao} />
        <Route path='/segredo' component={Segredo} />
        <Route path='/lama' component={Lama} />
        <Route path='/10358' component={Pagandobqmt} />
        <Route path='/aventura' component={Aventura} />
        <Route path='/gossebump2' component={Gossebump2} />
        <Route path='/950' component={Aeradogelo2} />
        <Route path='/40508' component={Tresninjas} />
        <Route path='/523366' component={Ocavaleirod} />
        <Route path='/13053' component={Boltsc} />
        <Route path='/417859' component={Gatodebotas} />
        <Route path='/zero7cr' component={Zero7cr} />
        <Route path='/522478' component={Pedrocoelho2} />
        <Route path='/524434' component={Eternos} />
        <Route path='/354857' component={Apenasus} />
        <Route path='/118683' component={Operacoese} />
        <Route path='/346808' component={Momentum} />
        <Route path='/7446' component={Trovao} />
        <Route path='/pokemon' component={Pokemon} />
        <Route path='/852592' component={Centauro} />
        <Route path='/10898' component={Sereia2} />
        <Route path='/47533' component={Scooby} />
        <Route path='/420818' component={Reileao} />
        <Route path='/774825' component={Aeradogelob} />
        <Route path='/245842' component={Afilhadorei} />
        <Route path='/79465' component={Otrapaceiro} />
        <Route path='/deencontrosam' component={Deencontrosam} />
        <Route path='/details/:id' component={Details} />
        <Route path='/details2/:id' component={Details2} />
        <Route path='/61037' component={Campeoesdos} />
        <Route path='/829557' component={Diashoje} />
        <Route path='/acao2' component={Acao2} />
        <Route path='/112205' component={Afamilia} />
        <Route path='/256474' component={Sanguenaveia} />
        <Route path='/53080' component={Tubaraodem} />
        <Route path='/152795' component={Ocongressof} />
        <Route path='/459075' component={Bravestorm} />
        <Route path='/254302' component={Notodopoder} />
        <Route path='/9297' component={Acasamonstro} />
        <Route path='/195423' component={Faroestecabloco} />
        <Route path='/337706' component={Mulheresaomar2} />
        <Route path='/10534' component={Tormenta} />
        <Route path='/221731' component={Samurayx2} />
        <Route path='/614934' component={Elvis} />
        <Route path='/22331' component={Osdezmandamentos} />
        <Route path='/44665' component={Olivroderute} />
        <Route path='/11817' component={Omongeapdb} />
        <Route path='/476299' component={Acasadomedo} />
        <Route path='/449406' component={Ajornadadevivo} />
        <Route path='/75948' component={Alendadmc} />
        <Route path='/164331' component={Aranhas} />
        <Route path='/178809' component={Acolonia} />
        <Route path='/308695' component={Alegiao} />
        <Route path='/66113' component={Avitimaperfeita} />
        <Route path='/11937' component={Osdeusesdel2} />
        <Route path='/82693' component={Oladobomdavida} />
        <Route path='/759175' component={Aprincesa} />
        <Route path='/540291' component={Amaldicaodi} />
        <Route path='/579872' component={Aviuvads} />
        <Route path='/346684' component={Embuscadaliberdade} />
        <Route path='/164457' component={Tudoporjustica} />
        <Route path='/146631' component={Assasinosde} />
        <Route path='/12085' component={Loucaspade} />
        <Route path='/414906' component={Batman} />
        <Route path='/624860' component={Matrixr} />
        <Route path='/568124' component={Encanto} />
        <Route path='/63' component={Osdozemacacos} />
        <Route path='/1654' component={Osdozec} />
        <Route path='/11162' component={Omercadordv} />
        <Route path='/402423' component={Omensageiro} />
        <Route path='/23367' component={Higthschool} />
        <Route path='/422821' component={Oprecodg} />
        <Route path='/96933' component={Porquees} />
        <Route path='/781456' component={Nezhacpv} />
        <Route path='/504198' component={Terrorns} />
        <Route path='/770428' component={Emnomedopai} />
        <Route path='/707214' component={Ateofinal} />
        <Route path='/aturmadam24' component={Aturmadam24} />
        <Route path='/Gamert1e1' component={Gamert1e1} />
        <Route path='/Gamert1e2' component={Gamert1e2} />
        <Route path='/Gamert1e3' component={Gamert1e3} />
        <Route path='/Gamert1e4' component={Gamert1e4} />
        <Route path='/Gamert1e5' component={Gamert1e5} />
        <Route path='/gameoft' component={Gameoft} />
        <Route path='/1399' component={Gameoftr} />
        <Route path='/27582' component={Assasinoapf} />
        <Route path='/39414' component={Tempodc} />
        <Route path='/127770' component={Apostolopauc} />
        <Route path='/875303' component={Amordoentio} />
        <Route path='/plutoser' component={Plutoser} />
        <Route path='/plutotdam' component={Plutotdam} />
        <Route path='/canaisp' component={Canaisp} />
        <Route path='/canaisrun' component={Canaisrun} />
        <Route path='/runtimepri' component={Runtimepri} />
        <Route path='/runtimecom' component={Runtimecom} />
        <Route path='/runtimeacao' component={Runtimeacao} />
        <Route path='/itvtv' component={Itvtv} />
        <Route path='/globonews' component={Globonews} />
        <Route path='/bandnews' component={Bandnews} />
        <Route path='/disneyc' component={Disneyc} />
        <Route path='/cnnbr' component={Cnnbr} />
        <Route path='/526896' component={Morbius} />
        <Route path='/11041' component={Afamiliab} />
        <Route path='/725201' component={Agenteo} />
        <Route path='/70160' component={Jogosv} />
        <Route path='/101299' component={Jogosvec} />
        <Route path='/131631' component={Jogosve1} />
        <Route path='/131634' component={Jogosvef} />
        <Route path='/espn' component={Espn} />
        <Route path='/espn2' component={Espn2} />
        <Route path='/espn3' component={Espn3} />
        <Route path='/sporttv' component={Sporttv} />
        <Route path='/sporttv2' component={Sporttv2} />
        <Route path='/sporttv3' component={Sporttv3} />
        <Route path='/globom' component={Globom} />
        <Route path='/globosp' component={Globosp} />
        <Route path='/Tnts1' component={Tnts1} />
        <Route path='/Tntsports5' component={Tntsport5} />
        <Route path='/Tntsports7' component={Tntsports7} />
        <Route path='/Tntsports8' component={Tntsports8} />
        <Route path='/18654' component={Cafeina} />
        <Route path='/507313' component={Acarga} />
        <Route path='/Megapix' component={Megapix} />
        <Route path='/Hbof' component={Hbof} />
        <Route path='/comedyc' component={Comedyc} />
        <Route path='/68202' component={Cadeoh} />
        <Route path='/228968' component={Jogadadm} />
        <Route path='/teste2' component={Teste2} />
        <Route path='/664474' component={Epiphaneap} />
        <Route path='/45767' component={Ajornadauvt} />
        <Route path='/766507' component={Opredadora} />
        <Route path='/1402' component={Thewd} />
        <Route path='/recordrj' component={Recordrj} />
        <Route path='/recordsc' component={Recordsc} />
        <Route path='/361743' component={Topgun} />
        <Route path='/303021' component={Osalvador} />
        <Route path='/332672' component={Obsessao} />
        <Route path='/redetv' component={Redetv} />
        <Route path='/15941' component={Poderel} />
        <Route path='/589157' component={Linewalker2} />
        <Route path='/13805' component={Superhli} />
        <Route path='/ossimpson' component={Ossimpson} />
        <Route path='/ummaluconp' component={Ummaluconp} />
        <Route path='/7347' component={Tropadeelite} />
        <Route path='/47931' component={Tropadeelite2} />
        <Route path='/twinpeaks' component={Twinpeaks} />
        <Route path='/357110' component={Vinhodv} />
        <Route path='/562266' component={Lacosdn} />
        <Route path='/powerr' component={Powerr} />
        <Route path='/444090' component={Oreidamontanha} />
        <Route path='/408670' component={Oagentemirim} />
        <Route path='/teste3' component={Teste3} />
        <Route path='/warnertv' component={Warnertv} />
        <Route path='/661930' component={Anuvem} />
        <Route path='/785533' component={Aprincesaap} />
        <Route path='/friends' component={Friends} />
        <Route path='/410537' component={Amityvilleot} />
        <Route path='/euronews' component={Euronews} />
        <Route path='/parttk' component={Parttk} />
        <Route path='/347751' component={Trezec} />
        <Route path='/cindiel' component={Cindiel} />
        <Route path='/858815' component={Asfotosv} />
        <Route path='/512195' component={Alertav} />
        <Route path='/tvamulherb' component={Tvamulherb} />
        <Route path='/homemasa' component={Homemasa} />
        <Route path='/13256' component={Aerademc} />
        <Route path='/52454' component={Megasvc} />
        <Route path='/daaz10' component={Daaz10} />
        <Route path='/16279' component={Amenteqm} />
        <Route path='/413452' component={Oresgateduv} />
        <Route path='/documentarios' component={Documentarios} />
        <Route path='/81488' component={Mamonasps} />
        <Route path='/254024' component={Afacedua} />
        <Route path='/seriegot' component={Seriegot} />
        <Route path='/gabriela' component={Gabriela} />
        <Route path='/novelas' component={Novelas} />
        <Route path='/youtubeml' component={Youtubeml} />
        <Route path='/gabriela1' component={Gabriela1} />
   
        


 



        
        
   

        




        


        
      </Switch>

    </Router>
    
  );
}

export default App;
