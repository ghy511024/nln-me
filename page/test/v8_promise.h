// Copyright 2012 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

/** \mainpage V8 API Reference Guide
 *
 * V8 is Google's open source JavaScript engine.
 *
 * This set of documents provides reference material generated from the
 * V8 header file, include/v8.h.
 *
 * For other documentation see http://code.google.com/apis/v8/
 */

#ifndef INCLUDE_V8_H_
#define INCLUDE_V8_H_

#include <stddef.h>
#include <stdint.h>
#include <stdio.h>
#include <memory>
#include <utility>
#include <vector>

#include "v8-version.h"  // NOLINT(build/include)
#include "v8config.h"    // NOLINT(build/include)

// We reserve the V8_* prefix for macros defined in V8 public API and
// assume there are no name conflicts with the embedder's code.

#ifdef V8_OS_WIN

// Setup for Windows DLL export/import. When building the V8 DLL the
// BUILDING_V8_SHARED needs to be defined. When building a program which uses
// the V8 DLL USING_V8_SHARED needs to be defined. When either building the V8
// static library or building a program which uses the V8 static library neither
// BUILDING_V8_SHARED nor USING_V8_SHARED should be defined.
#ifdef BUILDING_V8_SHARED
# define V8_EXPORT __declspec(dllexport)
#elif USING_V8_SHARED
# define V8_EXPORT __declspec(dllimport)
#else
# define V8_EXPORT
#endif  // BUILDING_V8_SHARED

#else  // V8_OS_WIN

// Setup for Linux shared library export.
#if V8_HAS_ATTRIBUTE_VISIBILITY
# ifdef BUILDING_V8_SHARED
#  define V8_EXPORT __attribute__ ((visibility("default")))
# else
#  define V8_EXPORT
# endif
#else
# define V8_EXPORT
#endif

#endif  // V8_OS_WIN

/**
 * The v8 JavaScript engine.
 */
namespace v8 {

class AccessorSignature;
class Array;
class ArrayBuffer;
class Boolean;
class BooleanObject;
class Context;
class CpuProfiler;
class Data;
class Date;
class External;
class Function;
class FunctionTemplate;
class HeapProfiler;
class ImplementationUtilities;
class Int32;
class Integer;
class Isolate;
template <class T>
class Maybe;
class Name;
class Number;
class NumberObject;
class Object;
class ObjectOperationDescriptor;
class ObjectTemplate;
class Platform;
class Primitive;
class Promise;
class PropertyDescriptor;
class Proxy;
class RawOperationDescriptor;
class Script;
class SharedArrayBuffer;
class Signature;
class StartupData;
class StackFrame;
class StackTrace;
class String;
class StringObject;
class Symbol;
class SymbolObject;
class PrimitiveArray;
class Private;
class Uint32;
class Utils;
class Value;
class WasmCompiledModule;
template <class T> class Local;
template <class T>
class MaybeLocal;
template <class T> class Eternal;
template<class T> class NonCopyablePersistentTraits;
template<class T> class PersistentBase;
template <class T, class M = NonCopyablePersistentTraits<T> >
class Persistent;
template <class T>
class Global;
template<class K, class V, class T> class PersistentValueMap;
template <class K, class V, class T>
class PersistentValueMapBase;
template <class K, class V, class T>
class GlobalValueMap;
template<class V, class T> class PersistentValueVector;
template<class T, class P> class WeakCallbackObject;
class FunctionTemplate;
class ObjectTemplate;
template<typename T> class FunctionCallbackInfo;
template<typename T> class PropertyCallbackInfo;
class StackTrace;
class StackFrame;
class Isolate;
class CallHandlerHelper;
class EscapableHandleScope;
template<typename T> class ReturnValue;

namespace internal {
class Arguments;
class DeferredHandles;
class Heap;
class HeapObject;
class Isolate;
class Object;
struct StreamedSource;
template<typename T> class CustomArguments;
class PropertyCallbackArguments;
class FunctionCallbackArguments;
class GlobalHandles;

namespace wasm {
class StreamingDecoder;
}  // namespace wasm
}  // namespace internal


/**
 * An instance of the built-in Promise constructor (ES6 draft).
 */
class V8_EXPORT Promise : public Object {
 public:
  /**
   * State of the promise. Each value corresponds to one of the possible values
   * of the [[PromiseState]] field.
   */
  enum PromiseState { kPending, kFulfilled, kRejected };

  class V8_EXPORT Resolver : public Object {
   public:
    /**
     * Create a new resolver, along with an associated promise in pending state.
     */
    static V8_DEPRECATE_SOON("Use maybe version",
                             Local<Resolver> New(Isolate* isolate));
    static V8_WARN_UNUSED_RESULT MaybeLocal<Resolver> New(
        Local<Context> context);


    Local<Promise> GetPromise();


    V8_DEPRECATE_SOON("Use maybe version", void Resolve(Local<Value> value));
    V8_WARN_UNUSED_RESULT Maybe<bool> Resolve(Local<Context> context,
                                              Local<Value> value);

    V8_DEPRECATE_SOON("Use maybe version", void Reject(Local<Value> value));
    V8_WARN_UNUSED_RESULT Maybe<bool> Reject(Local<Context> context,
                                             Local<Value> value);

    V8_INLINE static Resolver* Cast(Value* obj);

   private:
    Resolver();
    static void CheckCast(Value* obj);
  };

  V8_DEPRECATED("Use maybe version",
                Local<Promise> Catch(Local<Function> handler));
  V8_WARN_UNUSED_RESULT MaybeLocal<Promise> Catch(Local<Context> context,
                                                  Local<Function> handler);

  V8_DEPRECATED("Use maybe version",
                Local<Promise> Then(Local<Function> handler));
  V8_WARN_UNUSED_RESULT MaybeLocal<Promise> Then(Local<Context> context,
                                                 Local<Function> handler);

  /**
   * Returns true if the promise has at least one derived promise, and
   * therefore resolve/reject handlers (including default handler).
   */
  bool HasHandler();

  /**
   * Returns the content of the [[PromiseResult]] field. The Promise must not
   * be pending.
   */
  Local<Value> Result();

  /**
   * Returns the value of the [[PromiseState]] field.
   */
  PromiseState State();

  V8_INLINE static Promise* Cast(Value* obj);

  static const int kEmbedderFieldCount = V8_PROMISE_INTERNAL_FIELD_COUNT;

 private:
  Promise();
  static void CheckCast(Value* obj);
};
