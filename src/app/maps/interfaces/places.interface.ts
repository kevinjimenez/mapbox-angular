export interface PlacesInterface {
  type:        string;
  query:       number[];
  features:    Feature[];
  attribution: string;
}

export interface Feature {
  id:            string;
  type:          string;
  place_type:    string[];
  relevance:     number;
  properties:    Properties;
  text_es:       string;
  place_name_es: string;
  text:          string;
  place_name:    string;
  center:        number[];
  geometry:      Geometry;
  context:       Context[];
}

export interface Context {
  id:           string;
  text_es:      string;
  text:         string;
  wikidata?:    string;
  language_es?: string;
  language?:    string;
  short_code?:  string;
}

export interface Geometry {
  coordinates: number[];
  type:        string;
}

export interface Properties {
  foursquare: string;
  landmark:   boolean;
  address:    string;
  category:   string;
}