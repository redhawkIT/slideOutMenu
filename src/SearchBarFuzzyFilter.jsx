import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';
// http://www.material-ui.com/#/components/auto-complete

const fruit = [
  'Apple',
  'Apricot',
  'Avocado',
  'Banana',
  'Bilberry',
  'Blackberry',
  'Blackcurrant',
  'Blueberry',
  'Boysenberry',
  'Blood Orange',
  'Cantaloupe',
  'Currant',
  'Cherry',
  'Cherimoya',
  'Cloudberry',
  'Coconut',
  'Cranberry',
  'Clementine',
  'Damson',
  'Date',
  'Dragonfruit',
  'Durian',
  'Elderberry',
  'Feijoa',
  'Fig',
  'Goji berry',
  'Gooseberry',
  'Grape',
  'Grapefruit',
  'Guava',
  'Honeydew',
  'Huckleberry',
  'Jabouticaba',
  'Jackfruit',
  'Jambul',
  'Jujube',
  'Juniper berry',
  'Kiwi fruit',
  'Kumquat',
  'Lemon',
  'Lime',
  'Loquat',
  'Lychee',
  'Nectarine',
  'Mango',
  'Marion berry',
  'Melon',
  'Miracle fruit',
  'Mulberry',
  'Mandarine',
  'Olive',
  'Orange',
  'Papaya',
  'Passionfruit',
  'Peach',
  'Pear',
  'Persimmon',
  'Physalis',
  'Plum',
  'Pineapple',
  'Pumpkin',
  'Pomegranate',
  'Pomelo',
  'Purple Mangosteen',
  'Quince',
  'Raspberry',
  'Raisin',
  'Rambutan',
  'Redcurrant',
  'Salal berry',
  'Satsuma',
  'Star fruit',
  'Strawberry',
  'Squash',
  'Salmonberry',
  'Tamarillo',
  'Tamarind',
  'Tomato',
  'Tangerine',
  'Ugli fruit',
  'Watermelon'
];

const SearchBarFuzzyFilter = () => (
  <div className="row center-xs">
    <div className="col-xs-6">
      <div className="box">
        <AutoComplete
          floatingLabelText="Search filtering"
          filter={AutoComplete.fuzzyFilter}
          dataSource={fruit}
          maxSearchResults={5}
        />
      </div>
    </div>
  </div>
);

export default SearchBarFuzzyFilter;
