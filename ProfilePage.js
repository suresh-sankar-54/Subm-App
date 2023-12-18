import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const ProfilePage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.profilePage}>
      <View style={styles.frameParent}>
        <View style={styles.frameGroup}>
          <View style={styles.backIconParent}>
            <Pressable
              style={styles.backIconLayout}
              onPress={() => navigation.navigate("HomePage")}
            >
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require("../assets/vuesaxlineararrowleft.png")}
              />
            </Pressable>
            <Text style={[styles.profile, styles.profileSpaceBlock]}>
              Profile
            </Text>
            <Pressable
              style={[styles.notificationIcon, styles.profileSpaceBlock]}
              onPress={() => {}}
            >
              <Image
                style={styles.icon}
                contentFit="cover"
                source={require("../assets/vuesaxlinearnotification1.png")}
              />
            </Pressable>
          </View>
          <View style={styles.frameContainer}>
            <View style={styles.frameView}>
              <View style={[styles.ellipseParent, styles.frameChildLayout]}>
                <Image
                  style={[styles.frameChild, styles.frameChildLayout]}
                  contentFit="cover"
                  source={require("../assets/ellipse-201.png")}
                />
                <Image
                  style={[styles.frameItem, styles.frameIconPosition]}
                  contentFit="cover"
                  source={require("../assets/ellipse-211.png")}
                />
              </View>
              <Image
                style={[styles.frameInner, styles.frameIconPosition]}
                contentFit="cover"
                source={require("../assets/frame-349.png")}
              />
            </View>
            <Text style={styles.sureshSankar}>Suresh Sankar</Text>
          </View>
        </View>
        <View style={styles.frameParent1}>
          <View style={styles.frameGroup}>
            <Pressable style={styles.frameWrapperLayout} onPress={() => {}}>
              <View style={styles.frameParent3}>
                <View style={styles.rectangleParent}>
                  <View style={styles.rectangleView} />
                  <Image
                    style={[
                      styles.vuesaxlinearedit2Icon,
                      styles.frameIconPosition,
                    ]}
                    contentFit="cover"
                    source={require("../assets/vuesaxlinearedit2.png")}
                  />
                </View>
                <View style={styles.editProfileWrapper}>
                  <Text style={[styles.editProfile, styles.editProfileTypo]}>
                    Edit Profile
                  </Text>
                </View>
              </View>
            </Pressable>
            <View style={[styles.frameWrapper1, styles.frameWrapperLayout]}>
              <View style={styles.frameParent3}>
                <View style={styles.rectangleParent}>
                  <View style={styles.rectangleView} />
                  <Image
                    style={[
                      styles.vuesaxlinearedit2Icon,
                      styles.frameIconPosition,
                    ]}
                    contentFit="cover"
                    source={require("../assets/vuesaxlinearmusiclibrary2.png")}
                  />
                </View>
                <View style={styles.editProfileWrapper}>
                  <Text
                    style={[styles.mySubscriptions, styles.editProfileTypo]}
                  >
                    My Subscriptions
                  </Text>
                </View>
              </View>
            </View>
            <Pressable
              style={[styles.frameWrapper1, styles.frameWrapperLayout]}
              onPress={() => {}}
            >
              <View style={styles.frameParent3}>
                <View style={styles.rectangleParent}>
                  <View style={styles.rectangleView} />
                  <Image
                    style={[
                      styles.vuesaxlinearedit2Icon,
                      styles.frameIconPosition,
                    ]}
                    contentFit="cover"
                    source={require("../assets/vuesaxlinearbackward5seconds.png")}
                  />
                </View>
                <View style={styles.editProfileWrapper}>
                  <Text
                    style={[styles.mySubscriptions, styles.editProfileTypo]}
                  >
                    History
                  </Text>
                </View>
              </View>
            </Pressable>
            <View style={[styles.frameWrapper1, styles.frameWrapperLayout]}>
              <View style={styles.frameParent3}>
                <View style={styles.frameParent7}>
                  <View style={styles.rectangleParent}>
                    <View style={styles.rectangleView} />
                    <Image
                      style={[
                        styles.vuesaxlinearedit2Icon,
                        styles.frameIconPosition,
                      ]}
                      contentFit="cover"
                      source={require("../assets/vuesaxlinearsun.png")}
                    />
                  </View>
                  <View style={styles.editProfileWrapper}>
                    <Text
                      style={[styles.mySubscriptions, styles.editProfileTypo]}
                    >
                      Dark Mode
                    </Text>
                  </View>
                </View>
                <View style={[styles.frameWrapper3, styles.frameLayout]}>
                  <View style={[styles.frameChild4, styles.framePosition]} />
                </View>
              </View>
            </View>
            <Pressable
              style={[styles.frameWrapper1, styles.frameWrapperLayout]}
              onPress={() => {}}
            >
              <View style={styles.frameParent3}>
                <View style={styles.rectangleParent}>
                  <View style={styles.rectangleView} />
                  <Image
                    style={[
                      styles.vuesaxlinearedit2Icon,
                      styles.frameIconPosition,
                    ]}
                    contentFit="cover"
                    source={require("../assets/vuesaxlinearsetting2.png")}
                  />
                </View>
                <View style={styles.editProfileWrapper}>
                  <Text
                    style={[styles.mySubscriptions, styles.editProfileTypo]}
                  >
                    Settings
                  </Text>
                </View>
              </View>
            </Pressable>
            <View style={[styles.frameWrapper1, styles.frameWrapperLayout]}>
              <View style={styles.frameParent3}>
                <View style={styles.rectangleParent}>
                  <View style={styles.rectangleView} />
                  <Image
                    style={[
                      styles.vuesaxlinearedit2Icon,
                      styles.frameIconPosition,
                    ]}
                    contentFit="cover"
                    source={require("../assets/vuesaxlinearheartcircle.png")}
                  />
                </View>
                <View style={styles.editProfileWrapper}>
                  <Text
                    style={[styles.mySubscriptions, styles.editProfileTypo]}
                  >
                    Help
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.vuesaxlinearlogoutParent}>
            <Image
              style={styles.backIconLayout}
              contentFit="cover"
              source={require("../assets/vuesaxlinearlogout.png")}
            />
            <Text style={styles.logOut}>Log Out</Text>
          </View>
        </View>
      </View>
      <View style={styles.profilePageInner}>
        <View style={styles.frameParent10}>
          <Pressable
            style={[styles.vuesaxlinearhomeParent, styles.parentPosition]}
            onPress={() => navigation.navigate("HomePage")}
          >
            <Image
              style={styles.backIconLayout}
              contentFit="cover"
              source={require("../assets/vuesaxlinearhome.png")}
            />
            <Text style={[styles.home, styles.addTypo]}>Home</Text>
          </Pressable>
          <Pressable
            style={[styles.frameParent11, styles.framePosition]}
            onPress={() => {}}
          >
            <View style={styles.rectangleParent}>
              <Image
                style={styles.ellipseIcon}
                contentFit="cover"
                source={require("../assets/ellipse-19.png")}
              />
              <Image
                style={[styles.vuesaxlinearaddIcon, styles.frameIconPosition]}
                contentFit="cover"
                source={require("../assets/vuesaxlinearadd.png")}
              />
            </View>
            <Text style={[styles.add, styles.addTypo]}>Add</Text>
          </Pressable>
          <View
            style={[styles.vuesaxlinearprofileParent, styles.parentPosition]}
          >
            <Image
              style={styles.backIconLayout}
              contentFit="cover"
              source={require("../assets/vuesaxlinearprofile.png")}
            />
            <Text style={[styles.profile1, styles.addTypo]}>Profile</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profileSpaceBlock: {
    marginLeft: 107,
    height: 24,
  },
  frameChildLayout: {
    width: 80,
    zIndex: 0,
    height: 80,
  },
  frameIconPosition: {
    zIndex: 1,
    position: "absolute",
  },
  editProfileTypo: {
    height: 24,
    textAlign: "left",
    color: Color.fFFFFF,
    fontWeight: "500",
    display: "flex",
    fontFamily: FontFamily.regular10,
    fontSize: FontSize.bold16_size,
    alignItems: "center",
  },
  frameWrapperLayout: {
    padding: Padding.p_5xs,
    width: 336,
    backgroundColor: Color.color1,
    borderRadius: Border.br_5xs,
    flexDirection: "row",
    alignItems: "center",
  },
  frameLayout: {
    borderRadius: Border.br_xs,
    height: 24,
    overflow: "hidden",
  },
  framePosition: {
    top: 0,
    position: "absolute",
  },
  parentPosition: {
    top: 28,
    position: "absolute",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  addTypo: {
    marginTop: 4,
    textAlign: "center",
    fontFamily: FontFamily.regular10,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  backIconLayout: {
    height: 24,
    width: 24,
  },
  profile: {
    width: 66,
    textAlign: "center",
    fontFamily: FontFamily.regular10,
    fontSize: FontSize.bold16_size,
    marginLeft: 107,
    display: "flex",
    color: Color.colorYellowgreen,
    fontWeight: "700",
    justifyContent: "center",
    alignItems: "center",
  },
  notificationIcon: {
    width: 24,
  },
  backIconParent: {
    flexDirection: "row",
    justifyContent: "center",
  },
  frameChild: {
    zIndex: 0,
    height: 80,
  },
  frameItem: {
    width: 68,
    height: 68,
    left: 6,
    top: 6,
    zIndex: 1,
  },
  ellipseParent: {
    zIndex: 0,
    height: 80,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  frameInner: {
    right: 0,
    bottom: 0,
    height: 24,
    width: 24,
  },
  frameView: {
    flexDirection: "row",
    justifyContent: "center",
  },
  sureshSankar: {
    marginTop: 12,
    color: Color.fFFFFF,
    fontWeight: "500",
    textAlign: "center",
    fontFamily: FontFamily.regular10,
    fontSize: FontSize.bold16_size,
  },
  frameContainer: {
    marginTop: 24,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  frameGroup: {
    alignItems: "center",
  },
  rectangleView: {
    width: 32,
    height: 32,
    backgroundColor: Color.color,
    borderRadius: Border.br_5xs,
    zIndex: 0,
  },
  vuesaxlinearedit2Icon: {
    width: 20,
    height: 20,
    left: 6,
    top: 6,
    zIndex: 1,
  },
  rectangleParent: {
    flexDirection: "row",
  },
  editProfile: {
    width: 118,
  },
  editProfileWrapper: {
    width: 86,
    marginLeft: 12,
    justifyContent: "center",
  },
  frameParent3: {
    width: 312,
    flexDirection: "row",
    alignItems: "center",
  },
  mySubscriptions: {
    width: 180,
  },
  frameWrapper1: {
    marginTop: 16,
  },
  frameParent7: {
    flexDirection: "row",
    alignItems: "center",
  },
  frameChild4: {
    left: 23,
    backgroundColor: Color.fFFFFF,
    borderRadius: Border.br_xs,
    height: 24,
    overflow: "hidden",
    width: 24,
  },
  frameWrapper3: {
    backgroundColor: Color.colorYellowgreen,
    marginLeft: 120,
    width: 48,
  },
  logOut: {
    textAlign: "left",
    marginLeft: 12,
    width: 66,
    display: "flex",
    color: Color.colorYellowgreen,
    fontFamily: FontFamily.regular10,
    fontWeight: "700",
    fontSize: FontSize.bold16_size,
    height: 24,
    alignItems: "center",
  },
  vuesaxlinearlogoutParent: {
    alignItems: "flex-end",
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
  },
  frameParent1: {
    marginTop: 28,
    justifyContent: "center",
    alignItems: "center",
  },
  frameParent: {
    justifyContent: "center",
    alignItems: "center",
  },
  home: {
    color: Color.style,
    marginTop: 4,
    fontSize: FontSize.regular12_size,
    fontWeight: "500",
  },
  vuesaxlinearhomeParent: {
    left: 0,
  },
  ellipseIcon: {
    height: 48,
    width: 48,
    zIndex: 0,
  },
  vuesaxlinearaddIcon: {
    top: 10,
    left: 10,
    width: 28,
    height: 28,
  },
  add: {
    fontSize: FontSize.size_sm,
    width: 30,
    height: 18,
    color: Color.style,
    marginTop: 4,
    display: "flex",
    fontWeight: "700",
    justifyContent: "center",
    alignItems: "center",
  },
  frameParent11: {
    left: 106,
    justifyContent: "center",
    alignItems: "center",
  },
  profile1: {
    fontSize: FontSize.regular12_size,
    fontWeight: "500",
    marginTop: 4,
    color: Color.colorYellowgreen,
  },
  vuesaxlinearprofileParent: {
    left: 223,
  },
  frameParent10: {
    top: -14,
    left: 57,
    width: 261,
    height: 70,
    position: "absolute",
  },
  profilePageInner: {
    width: 375,
    marginTop: 93,
    backgroundColor: Color.color,
    height: 80,
  },
  profilePage: {
    backgroundColor: Color.a1A1A,
    flex: 1,
    paddingTop: Padding.p_21xl,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
  },
});

export default ProfilePage;
