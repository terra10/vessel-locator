module.exports = {
  mutation: `mutation createVessel($input: CreateVesselInput!) {
      createVessel(input: $input) {
        id
        name
        ship_type
        latitude
        longitude
        heading
        speed
        rot
        accuracy
        course
        navigational_status
        destination
      }
    }
    `
};
