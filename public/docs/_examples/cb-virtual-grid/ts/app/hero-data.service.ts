// #docregion
import { Row }    from './row';

export class HeroDataService {

  getApplicants(count: number): Array<Row> {

    let rows: Array<Row> = [];
    let heroes: Array<string> = ['Mr. Nice',
                                'Narco',
                                'Bombasto',
                                'Celeritas',
                                'Magneta',
                                'RubberMan',
                                'Dynama',
                                'Dr IQ',
                                'Magma',
                                'Tornado'];

    for (let i = 0; i < count; i++) {
      let heroIndex = this.generateRandomNumber(heroes.length - 1);
      let heroData = [heroes[heroIndex], count - i, this.generateRandomNumber(70) + 30];
      rows.push(this.createCell(i, heroData));
    }
    return rows;
  }

  private generateRandomNumber(upperBound: number) {
    return Math.floor(Math.random() * upperBound);
  }

  private createCell(index: number, values: Array<any>): Row {
    let row = new Row(values.length);

    for (let i = 0; i < values.length; i++) {
      row.columns[i].cellValue = values[i];
    }
    return row;
  }
}

