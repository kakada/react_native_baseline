import User from '../models/User';
import Category from '../models/Category';
import {navigationRef} from '../navigators/app_navigator';

const navigationService = (() => {
  return {
    signOut,
    navigateCategory,
  }

  function signOut() {
    const loggedInUser = User.loggedInUser();
    User.update(loggedInUser.uuid, { logged_in: false });
    navigationRef.current?.navigate('LoginSelectionView');
  }

  function navigateCategory(categoryUuid) {
    let routeName = 'LeafCategoryDetailView';
    if (Category.isParentCategory(categoryUuid))
      routeName = 'SubCategoryView';
    else if (Category.isSubCategory(categoryUuid))
      routeName = 'LeafCategoryView';

    navigationRef.current?.navigate(routeName, { uuid: categoryUuid });
  }
})();

export default navigationService;