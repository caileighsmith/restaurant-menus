const {db} = require('./db')
const {Restaurant, Menu} = require('./models/index')
const {
    seedRestaurant,
    seedMenu,
  } = require('./seedData');

describe('Restaurant and Menu Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await db.sync({ force: true });
    });

    test('can create a Restaurant', async () => {
        // TODO - write test
        const exampleRestaurant = await Restaurant.create(seedRestaurant[0])

        expect(exampleRestaurant.name).toEqual(seedRestaurant[0].name)

    });

    test('can create a Menu', async () => {
        // TODO - write test
        const testMenu = await Menu.create(seedMenu[0])
        expect(testMenu.title).toEqual(seedMenu[0].title)
    });

    test('can find Restaurants', async () => {
        //querying
        const findingAppleBees = await Restaurant.findOne({
            where:{
                name: 'AppleBees'
            }
        })
        expect(findingAppleBees.name).toEqual('AppleBees')
    });

    test('can find Menus', async () => {
        const findingBreakfast = await Menu.findOne({
            where:{
                title: 'Breakfast'
            }
        })
        // TODO - write test
        expect(findingBreakfast.title).toEqual('Breakfast')
    });

    test('can delete Restaurants', async () => {

        Restaurant.destroy({
            where:{
                name: 'AppleBees'
            }
        })
        const findingAppleBees = await Restaurant.findOne({
            where:{
                name: 'AppleBees'
            }
        })

        expect(findingAppleBees).toEqual(null)
    });
})