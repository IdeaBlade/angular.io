import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { BannerComponent } from './banner.component';

let comp:    BannerComponent;
let fixture: ComponentFixture<BannerComponent>;
let de:      DebugElement;
let el:      HTMLElement;

describe('BannerComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerComponent ], // declare the test component
    });

    fixture = TestBed.createComponent(BannerComponent);

    comp = fixture.componentInstance; // BannerComponent test instance

    // query for the title <h1> by CSS element selector
    de = fixture.debugElement.query(By.css('h1'));
    el = de.nativeElement;

  });

  it('should display original title', () => {
    fixture.detectChanges();
    expect(el.textContent).toContain(comp.title);
  });

  it('should display a different test title', () => {
    comp.title = 'Test Title';
    fixture.detectChanges();
    expect(el.textContent).toContain('Test Title');
  });

  it('no title in the DOM until manually call `detectChanges`', () => {
    expect(el.textContent).toEqual('');
  });

});


/////////  With AutoChangeDetect /////
import { ComponentFixtureAutoDetect } from '@angular/core/testing';

describe('BannerComponent with AutoChangeDetect', () => {

  beforeEach(() => {
    // #docregion auto-detect
    fixture = TestBed.configureTestingModule({
      declarations: [ BannerComponent ],
      providers: [
        { provide: ComponentFixtureAutoDetect, useValue: true }
      ]
    })
    .createComponent(BannerComponent);

    comp = fixture.componentInstance; // BannerComponent test instance

    // query for the title <h1> by CSS element selector
    de = fixture.debugElement.query(By.css('h1'));
    el = de.nativeElement;
  });

  it('should display original title', () => {
    // Hooray! No `fixture.detectChanges()` needed
    expect(el.textContent).toContain(comp.title);
  });

  it('should still see original title after comp.title change', () => {
    const oldTitle = comp.title;
    comp.title = 'Test Title';
    // Displayed title is old because Angular didn't hear the change :(
    expect(el.textContent).toContain(oldTitle);
  });

  it('should display updated title after detectChanges', () => {
    comp.title = 'Test Title';
    fixture.detectChanges(); // detect changes explicitly
    expect(el.textContent).toContain(comp.title);
  });
});


describe('BannerComponent (simpified)', () => {
  beforeEach(() => {

    // refine the test module by declaring the test component
    TestBed.configureTestingModule({
      declarations: [ BannerComponent ],
    });

    // create component and test fixture
    fixture = TestBed.createComponent(BannerComponent);

    // get test component from the fixture
    comp = fixture.componentInstance;
  });

  it('should display original title', () => {

    // trigger change detection to update the view
    fixture.detectChanges();

    // query for the title <h1> by CSS element selector
    de = fixture.debugElement.query(By.css('h1'));

    // confirm the element's content
    expect(de.nativeElement.textContent).toContain(comp.title);
  });
});
