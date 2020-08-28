const Math = require('../src/math');
var  axios =require('axios');

jest.mock('axios');
describe('Math library tests', () => {

  var m = null;
  beforeEach(() => {
    m = new Math();
  });

  afterEach(() => {
    m = null;
  });

  test('Math.add , adds 1 + 2 to equal 3', () => {
    const spyAdd = jest.spyOn(m, 'Add'); 
    expect(m.Add(1, 2)).toBe(3);
    expect(spyAdd).toBeCalled();
    expect(spyAdd).toBeCalledWith(1,2);

  });
  test('Math.subtract , subtracts 3 - 2 to equal 1', () => {
    expect(m.Subtract(3, 2)).toBe(1);
  });
  test('Math.eval , returns true if 3 2 are given as parameter', () => {
    expect(m.Eval(3, 2)).toBe(true);
  });

  test('Math.AddOrSubtract, returns 9  given  3,2,"add" as parameter', () => {
    const myAddMock = jest.fn(function (a,b) { 
      return a+b;
    });
    m.Add=myAddMock;
    const mySbuctractMock = jest.fn(function (a,b) { 
      return a-b;
    });
    m.Subtract=mySbuctractMock;
    expect(m.AddOrSubtract(3,2,"add")).toBe(9);
    expect(myAddMock.mock.calls.length).toBe(1);
    expect(mySbuctractMock.mock.calls.length).toBe(1);
    expect(myAddMock.mock.calls[0][0]).toBe(3)
    expect(myAddMock.mock.calls[0][1]).toBe(2)
    expect(mySbuctractMock.mock.calls[0][0]).toBe(3)
    expect(mySbuctractMock.mock.calls[0][1]).toBe(2)
   
  });


  test('Math.OnlineAdd, returns 5  given  3,2 as parameter', async () => {
    const requestData = {
      data: {
        sum: 5,
        success:true,
        message:"success"
      },
    };
    axios.post.mockImplementationOnce(() => Promise.resolve(requestData));
   
    var returnVal = await m.OnlineAdd(3,2);
    
    expect(returnVal).toBe(5);
    expect(axios.post.mock.calls.length).toBe(1);
    expect(axios.post.mock.calls[0][0]).toBe("http://localhost:8090/api/add");
    expect(axios.post.mock.calls[0][1]).toEqual({a:3,b:2}); 
   
    // without this first
    axios.post.mockReset()
  });

  test('Math.OnlineAdd, returns 5  given  3,2 as parameter', async () => {
    const requestData = {
      data: {
        sum: 0,
        success:false,
        message:"error"
      },
    };
 //  with this first. ->  axios.post.mockImplementationOnce(() => Promise.resolve(data));
 axios.post.mockImplementationOnce(() => Promise.reject(requestData.data.message));
   
    try{
      var returnVal = await m.OnlineAdd(3,2);
      expect(returnVal).toBe("This should fail!")
    }catch(e){
      expect(axios.post.mock.calls.length).toBe(1);
      expect(axios.post.mock.calls[0][0]).toBe("http://localhost:8090/api/add");
      expect(axios.post.mock.calls[0][1]).toEqual({a:3,b:2}); 
      expect(e).toBe("error")
    }
   
    /*
    expect(returnVal).toBe(5);
    expect(axios.post.mock.calls.length).toBe(1);
    expect(axios.post.mock.calls[0][0]).toBe("http://localhost:8090/api/add");
    expect(axios.post.mock.calls[0][1]).toEqual({a:3,b:2}); 
    */
  });


});