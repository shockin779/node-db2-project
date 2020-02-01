
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {vin: 'WDBNG70JXYA110920', make: 'Nissan', model: 'Altima', mileage: 150000, transmissionType: 'A', title: 'Clean'},
        {vin: '2FMDK3JC7ABA66126', make: 'Ford', model: 'Mustang', mileage: 86132, transmissionType: 'M', title: 'Clean'},
        {vin: '19UUA9F57CA029470', make: 'Volkswagon', model: 'Jetta', mileage: 112546, transmissionType: 'A', title: 'Clean'},
        {vin: 'WBA3A5C59DF360608', make: 'Ford', model: 'Taurus', mileage: 269976, transmissionType: 'A', title: 'Salvage'},
        {vin: 'SALVN2BG7DH827040', make: 'Kia', model: 'Optima', mileage: 55875, transmissionType: 'A'},
        {vin: '1D7HA18D73S349748', make: 'Chevy', model: 'Cruz', mileage: 5436, title: 'Clean'},
        {vin: '1FDLE40F1THB49416', make: 'Ford', model: 'F250', mileage: 39000, transmissionType: 'A', title: 'Clean'},
        {vin: '1HGCM56653A035465', make: 'Chevy', model: 'Impala', mileage: 113000, transmissionType: 'M', title: 'Salvage'},
        {vin: '2G1WC5E37D1250811', make: 'Nissan', model: 'Sentra', mileage: 115342},
        {vin: 'WBA3N3C54EF743866', make: 'Dodge', model: 'Ram', mileage: 143000, title: 'Salvage'},
      ]);
    });
};
