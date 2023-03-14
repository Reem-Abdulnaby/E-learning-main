import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(course: any, args?: any): any {
    if(!course)return null;
    if(!args)return course;
    args = args.toLowerCase();
    return course.filter((data: any)=>{
        return data.name.toLowerCase().includes(args);
    });
}


}
