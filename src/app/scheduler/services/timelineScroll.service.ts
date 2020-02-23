export class ScrollingService {
  scrollToCurrentHour() {
    const timeStamp: Element[] = Array.from(document.getElementsByClassName('hourStamp'));
    const anchor: Element = timeStamp.filter(p => p.innerHTML.split(':')[0] === `${new Date().getHours()}`)[0];
    anchor.scrollIntoView({ block: 'center', behavior: 'smooth' });
  }


}
