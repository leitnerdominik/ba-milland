import React from 'react';

import Layout from '../components/Layout/Layout';

import classes from '../styles/pages/impressum/impressum.module.css';

const impressum = () => {
  return (
    <Layout>
      <div className={classes.Impressum}>
        <h1>Impressum</h1>
        <h3>Auftraggeber</h3>
        <p>Bildungsausschuss Milland</p>
        <h3>Entwicklung</h3>
        <p>Dominik Leitner</p>
        <h3>Bildquellen</h3>
        <ul>
          <li>Vereine Millands</li>
          <li>Bildungsausschuss Milland</li>
          <li>
            <a href="https://sentres.com" target="_blank" rel="noopener noreferrer">
              sentres.com
            </a>
          </li>
        </ul>
        <h3>Datenschutz</h3>
        <p>
          Aufklärung im Sinne des Art. 13 des Legislativdekretes Nr. 196/2003
          <br /> Sehr geehrte Damen und Herren,
          <br /> Das Dlvo Nr. 196/2003 (italienischer Datenschutzkodex) sieht
          den Schutz von Personen und anderen Subjekten bei der Verarbeitung der
          persönlichen Daten vor. Im Sinne des Gesetzes werden Ihre Daten von
          uns korrekt und vertraulich behandelt. Im Sinne des Art. 13 des Dlvo
          Nr. 196/2003 teilen wir Ihnen mit:
          <br /> 1. Die von Ihnen erhobenen Daten werden für folgenden Zweck
          verwendet: Korrespondenz
          <br /> 2. Die Datenverarbeitung erfolgt auf folgende Art und Weise:
          E-Mail und Post
          <br /> 3. Die Aushändigung Ihrer Daten ist freiwillig/verpflichtend
          (wenn verpflichtend Grund angeben). Eine eventuelle Weigerung der
          Aushändigung Ihrer Daten hat keine Folgen/ hat Folgen zur Erfüllung
          oder teilweisen Erfüllung des Vertragens / zur Weiterführung der
          Geschäftsbeziehung.
          <br /> 4. Ihre Daten werden nicht an Dritte weitergegeben, oder
          verbr/eitet.
          <br /> 5. Der Träger der Datenverarbeitung ist: Bea Pircher
          <br /> 6. Der Verantwortliche der Datenverarbeitung ist: Bea Pircher
          <br /> 7. Sie können jederzeit gegenüber den Träger der
          Datenverarbeitung Ihre Rechte im Sinne des Art. 7 des Dlvo 196/2003
          geltend machen, der an dieser Stelle vollinhaltlich wiedergegeben
          wird:
          <br />{' '}
          <strong>
            Legislativdekret Nr. 196/2003, Art. 7 – Recht auf Zugang zu den
            personenbezogenen Daten und andere Rechte
          </strong>
          <br /> 1. Die betroffene Person hat das Recht, Auskunft darüber zu
          erhalten, ob Daten vorhanden sind, die sie betreffen, auch dann, wenn
          diese noch nicht gespeichert sind; sie hat ferner das Recht, dass ihr
          diese Daten in verständlicher Form übermittelt werden.
          <br /> 2. Die betroffene Person hat das Recht auf Auskunft über
          <br /> a) die Herkunft der personenbezogenen Daten;
          <br /> b) den Zweck und die Modalitäten der Verarbeitung;
          <br /> c) das angewandte System, falls die Daten elektronisch
          verarbeitet werden;
          <br /> d) die wichtigsten Daten zur Identifizierung des
          Rechtsinhabers, der Verantwortlichen und des im Sinne von Artikel 5
          Absatz 2 namhaft gemachten Vertreters;
          <br /> e) die Personen oder Kategorien von Personen, denen die
          personenbezogenen Daten übermittelt werden können oder die als im
          Staatsgebiet namhaft gemachte Vertreter, als Verantwortliche oder als
          Beauftragte davon Kenntnis erlangen können.
          <br /> 3. Die betroffene Person hat das Recht,
          <br /> f) die Aktualisierung, die Berichtigung oder, sofern
          interessiert, die Ergänzung der Daten zu verlangen;
          <br /> g) zu verlangen, dass widerrechtlich verarbeitete Daten
          gelöscht, anonymisiert oder gesperrt werden; dies gilt auch für Daten,
          deren Aufbewahrung für die Zwecke, für die sie erhoben oder später
          verarbeitet wurden, nicht erforderlich ist;
          <br /> h) eine Bestätigung darüber zu erhalten, dass die unter den
          Buchstaben a) und b) angegebenen Vorgänge, auch was ihren Inhalt
          betrifft, jenen mitgeteilt wurden, denen die Daten übermittelt oder
          bei denen sie verbr/eitet wurden, sofern sich dies nicht als unmöglich
          erweist oder der Aufwand an Mitteln im Verhältnis zum geschützten
          Recht unvertretbar groß wäre.
          <br /> 4. Die betroffene Person hat das Recht, sich ganz oder
          teilweise
          <br /> a) der Verarbeitung personenbezogener Daten, die sie betreffen,
          aus legitimen Gründen zu widersetzen, auch wenn diese Daten dem Zweck
          der Sammlung entsprechen;
          <br /> b) der Verarbeitung personenbezogener Daten, die sie betreffen,
          zu widersetzen, wenn diese Verarbeitung zum Zwecke des Versands von
          Werbematerial oder des Direktverkaufs, zur Markt- oder
          Meinungsforschung oder zur Handelsinformation erfolgt.
        </p>
      </div>
    </Layout>
  );
};

export default impressum;
