describe('Split Array function', function() {
  it('is able to split an empty array', function() {
    expect( merging.split([]) ).toEqual( [] );
  });

  it('is able to split a single-element array', function() {
    expect( merging.split([1]) ).toEqual( [1] );
  });

  it('is able to split a two-element array into two arrays', function() {
    expect( merging.split([1, 2]) ).toEqual( [[1], [2]] );
  });

  it('is able to split a large even array into two halves', function() {
    expect( merging.split([1, 2, 3, 4]) ).toEqual( [[1, 2], [3, 4]] );
  });

  it('is able to split a large odd array into two halves', function() {
    expect( merging.split([1, 2, 3, 4, 5]) ).toEqual( [[1, 2], [3, 4, 5]] );
  });
});

describe('Merge function', function(){
  it('is able to merge two one-element arrays into one sorted array', function(){
    expect( merging.merge([1], [2]) ).toEqual( [1, 2] );
  });

  it('is able to merge two two-element sorted arrays into one sorted array', function(){
    expect( merging.merge([1, 2], [3, 4]) ).toEqual( [1, 2, 3, 4] );
  });

  it('is able to merge two different-length sorted arrays into one sorted array', function(){
    expect( merging.merge([1, 2], [3, 4, 5]) ).toEqual( [1, 2, 3, 4, 5] );
  });
});

describe('Merge Sort function', function(){
  beforeAll(function(){
    spyOn(merging, 'mergeSort').and.callThrough();
  })

  it('is able to merge one-element array', function(){
    expect( merging.mergeSort([1])).toEqual( [1] );
  });

  it('is able to merge one-element array', function(){
    expect( merging.mergeSort([2, 1])).toEqual( [1, 2] );
  });

  it('is able to mergesort short array into one sorted array', function(){
    expect( merging.mergeSort([1, 3, 2])).toEqual([1, 2, 3]);
  });

  it('is able to mergesort long array into one sorted array', function(){
    expect( merging.mergeSort([9, 1, 4, 2, 3, 7, 5])).toEqual([1, 2, 3, 4, 5, 7, 9]);
    // expect( merging.mergeSort.calls.count()).toEqual(0);
  });
});
