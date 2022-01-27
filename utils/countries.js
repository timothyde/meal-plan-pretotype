import countries from 'i18n-iso-countries';

countries.registerLocale(require('i18n-iso-countries/langs/de.json'));

export default Object.keys(countries.getAlpha2Codes())
  .map((code) => ({
    code,
    name: countries.getNames('de', { select: 'official' })[code],
  }))
  .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
