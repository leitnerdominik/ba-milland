const CLUBS = {
  bildungsausschuss: '#2FA521',
  chronik: '#00a8ff',
  frauenbewegung: '#0097e6',
  frauenchor: '#8c7ae6',
  'freiwillige feuerwehr': '#c23616',
  'freundeskreis skfv milland': '#5F3B3B',
  kigo: '#fbc531',
  krippenfreunde: '#e1b12c ',
  kvw: '#4cd137',
  mize: '#44bd32',
  musikkapelle: '#487eb0',
  seniorenklub: '#40739e',
  svp: '#e84118',
  vereinsgemeinschaft: '#273c75',
  volkstanzgruppe: '#192a56',
};

const mapClubToColor = club => {
  if(CLUBS[club] == undefined) {
    return '#e84118'
  }
  return CLUBS[club];
};

export default mapClubToColor;
