import { TestBed } from '@angular/core/testing';

import { GestionEmpService } from './gestion-emp.service';

describe('GestionEmpService', () => {
  let service: GestionEmpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionEmpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
