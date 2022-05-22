/* eslint-disable camelcase */
const mapDBToModel = ({
  id, title, year, performer, genre, duration, album_id,
}) => ({
  id, title, year, performer, genre, duration, albumId: album_id,
});

const mapDBModel = ({
  id, title, performer,
}) => ({
  id, title, performer,
});

module.exports = { mapDBToModel, mapDBModel };
