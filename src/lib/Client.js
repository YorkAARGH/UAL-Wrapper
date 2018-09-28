const fetch = require("node-fetch");
const { URL } = require("url");

/**
 * Client for Azur Lane API Wrapper
 */
class AzurLaneClient {

  constructor() {
    /**
     * Base URL for Azur Lane API
     * @type {String}
     */
    this.baseUrl = "https://al-shipgirls.pw/";
  }

  /* Text based endpoints */

  /**
   * card endpoint
   * @param {string} name The name of the ship you want to create a card for.
   * @returns {Promise<Buffer>}
   */
  card(name) {
    return this._get("image/playingcard", [["name", name]]);
  }

  /**
   * Detailed Info Search
   * @param {string} name The name of the ship you want detailed information on.
   * @returns {Promise<Buffer>}
   */
  detailed(name) {
    return this._get("shipyard/ship_info_detailed", [["name", name]]);
  }

  /**
   * Brief Info Search
   * @param {string} name The name of the ship you want brief information on.
   * @returns {Promise<Buffer>}
   */
  brief(name) {
    return this._get("shipyard/ship_info_brief", [["name", name]]);
  }

  /**
   * Direct look up
   * @param {string} name The name of the exact ship you want information on.
   * @returns {Promise<Buffer>}
   */
  direct(name) {
    return this._get(`shipyard/ship/${name}`);
  }

  /**
   * Discord embed
   * @param {string} name This endpoint are for those that don't want to put time in to making the perfect embed.
   * @returns {Promise<Buffer>}
   */
  embed(name) {
    return this._get("misc/discord", [["name", name]]);
  }

  /**
   * A private method used to get endpoints with querys
   * @param {string} endpoint endpoint string
   * @param {Object} [query={}] query object
   * @returns {Promise<any>}
   * @private
   */
  async _get(endpoint, query = []) {
    const url = new URL(this.baseUrl + endpoint);
    for (const [key, value] of query) url.searchParams.append(key, value);
    const result = await fetch(url);
    if (result.ok) return result.headers.get("content-type").includes("application/json") ? result.json() : result.buffer();
    throw result;
  }

}

module.exports = AzurLaneClient;
