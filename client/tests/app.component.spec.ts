import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from '../src/app/app.component';
import { LoginComponent } from '../src/app/user/components/login/login.component';
import { AuthService } from '../src/app/sections/services/auth.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { BooksListComponent } from '../src/app/books/components/books-list/books-list.component';
import { provideRouter, Router } from '@angular/router';
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

//
// MOCK COMPONENT para evitar errores de componentes que no existen en el test
//
@Component({
  selector: 'sections-components-footer',
  standalone: false,
  template: '',
})
class MockFooterComponent {}

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
  declarations: [AppComponent, MockFooterComponent],
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    provideHttpClientTesting(), 
    provideRouter([]),
    AuthService,
  ],
  schemas: [NO_ERRORS_SCHEMA],
}).compileComponents();

  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the footer component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('sections-components-footer')).toBeTruthy();
  });

  //
  // TESTS DEL SERVICIO DE AUTENTICACIÓN
  //
  describe('AuthService', () => {
    let service: AuthService;

    beforeEach(() => {
      service = TestBed.inject(AuthService);
    });

    it('should be created', () => {
      expect(service).toBeTruthy();
    });

    it('should return false if not authenticated', () => {
      localStorage.removeItem('accessToken');
      expect(service.isAuthenticated()).toBeFalsy();
    });
  });

//
// TEST DEL COMPONENTE LOGIN
//
describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [LoginComponent],
      providers: [
        provideHttpClient(withInterceptorsFromDi()),
        provideHttpClientTesting(),

        {
          provide: AuthService,
          useValue: {
            login: jest.fn().mockReturnValue({ subscribe: jest.fn() }),
            isAuthenticated: jest.fn().mockReturnValue(false), // ✅ Agregado
          },
        },
        {
          provide: Router,
          useValue: { navigate: jest.fn() },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the login component', () => {
    expect(component).toBeTruthy();
  });

  it('should have a form with email and password fields', () => {
    expect(component.loginForm.contains('email')).toBeTruthy();
    expect(component.loginForm.contains('password')).toBeTruthy();
  });
});

  //
  // TEST DEL COMPONENTE DE LISTADO DE LIBROS
  //
  describe('BooksListComponent', () => {
    let component: BooksListComponent;
    let fixture: ComponentFixture<BooksListComponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [BooksListComponent],
      }).compileComponents();

      fixture = TestBed.createComponent(BooksListComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });
});
