import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(data: any[], searchIIT: string, searchText: string): any[] {
    if(!data) return [];
    if(!searchText) return data;
    searchText = searchText.toUpperCase();
    searchIIT = searchIIT.toUpperCase();
    if(searchIIT==="" || searchIIT ==="ALL IIT"){
      return data.filter(item => {
        return item.name.toUpperCase().includes(searchText)
      })
    }
    if(searchIIT){
      console.log(searchIIT);
      data = data.filter(item => {
        return item.collegeName === searchIIT;
      });
      return data.filter(item=>{
        return item.name.toUpperCase().includes(searchText);
      })
    }
  

    // return data.filter(item =>{
    //   return item.toUpperCase().includes(searchText.toUpperCase());
    // });
  }
}
