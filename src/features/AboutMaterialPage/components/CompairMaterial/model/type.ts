type MaterialColumnType = string;

type MaterialValue = number | string;

type MaterialRowType = {
  characteristic: string;
  values: MaterialValue[];
};
export interface IMaterialsProperty {
  columns: MaterialColumnType[];
  rows: MaterialRowType[];
}

export interface IMaterialsGraph {
  type: string;
  score: number;
}
