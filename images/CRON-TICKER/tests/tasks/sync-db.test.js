const { syncDb } = require('../../tasks/sync-db');

describe('Pruebas de la tarea sync-db', () => {
    test('Debe ejecutar la tarea y retornar el número de veces que se ha ejecutado', () => {
        syncDb();
        const times = syncDb();
        expect(times).toBe(2);
    });
});